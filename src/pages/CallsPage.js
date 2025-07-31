import React, { useState, useEffect } from "react";
import { getCallsList } from "../utils/api";
import DatePicker from "../components/DatePicker";
import Filter from "../components/Filter";
import CallItem from "../components/CallItem";
import { ArrowUpIcon, ArrowDownIcon } from "../UI/UI";

const CallsPage = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState([undefined, undefined]);
  const [callType, setCallType] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const [isPlayingId, setIsPlayingId] = useState(null);
  const [isCalendarOp, setIsCalendarOp] = useState(false);
  const [count, setCount] = useState(0);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchDataCalls = async () => {
      setLoading(true);

      try {
        const data = await getCallsList({
          dateStart: dateRange[0] && dateRange[1] && formatDate(dateRange[0]),
          dateEnd: dateRange[0] && dateRange[1] && formatDate(dateRange[1]),
          callType,
          sortBy,
        });
        setCalls(data);
      } catch (error) {
        console.error("Ошибка в fetchDataCalls", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataCalls();
  }, [callType, sortBy]);

  //Получение звонков для DatePicker
  useEffect(() => {
    const fetchDataCalls = async () => {
      if (!dateRange[0] || !dateRange[1]) {
        return;
      }

      setLoading(true);

      isCalendarOp && setIsCalendarOp(false);
      try {
        const data = await getCallsList({
          dateStart: dateRange[0] && dateRange[1] && formatDate(dateRange[0]),
          dateEnd: dateRange[0] && dateRange[1] && formatDate(dateRange[1]),
          callType,
          sortBy,
        });
        setCalls(data);
      } catch (error) {
        console.error("Ошибка в fetchDataCalls", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataCalls();
  }, [dateRange]);

  return (
    <div className="calls-page">
      <div
        className="controls"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Filter
          callType={callType}
          setCallType={setCallType}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setCount={setCount}
        />
        <DatePicker
          dateRange={dateRange}
          setDateRange={setDateRange}
          isCalendarOp={isCalendarOp}
          setIsCalendarOp={setIsCalendarOp}
          count={count}
          setCount={setCount}
        />
      </div>

      {(loading && (
        <div
          className="loading"
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Загрузка...
        </div>
      )) || (
        <div
          style={{
            width: "100%",
            background: "rgba(255, 255, 255, 1)",
            padding: "24px 40px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
            id="callitemstable"
          >
            <thead>
              <tr>
                <th style={{ width: "54px" }}>Тип</th>
                <th style={{ width: "88px" }}>
                  <span
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color:
                        sortBy === "date"
                          ? "rgba(31, 70, 251, 1)"
                          : "rgb(94, 119, 147)",
                    }}
                    onClick={() => setSortBy("date")}
                  >
                    {`Время `}
                    {sortBy === "date" ? <ArrowDownIcon /> : <ArrowUpIcon />}
                  </span>
                </th>
                <th style={{ width: "129px" }}>Сотрудник</th>
                <th>Звонок</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th>
                  <span
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color:
                        sortBy === "duration"
                          ? "rgba(31, 70, 251, 1)"
                          : "rgb(94, 119, 147)",
                    }}
                    onClick={() => setSortBy("duration")}
                  >
                    {`Длительность `}
                    {sortBy === "duration" ? (
                      <ArrowDownIcon />
                    ) : (
                      <ArrowUpIcon />
                    )}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {calls?.map((call) => (
                <CallItem
                  key={call.id}
                  call={call}
                  isPlayingId={isPlayingId}
                  setIsPlayingId={setIsPlayingId}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CallsPage;
