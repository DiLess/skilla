import React, { useState, useMemo, useEffect } from "react";
import Player from "./Player";
import { getCallRecord } from "../utils/api";
import {
  IncomingIcon,
  OutgoingIcon,
  MissedIcon,
  DontCallIcon,
  RatingSpan,
} from "../UI/UI";

const CallItem = ({ call, isPlayingId, setIsPlayingId }) => {
  const randomEvaluation = useMemo(() => Math.floor(Math.random() * 4) + 1, []);

  const recordId = call.record;
  const partnershipId = call.partnership_id;

  const [audioFile, setAudioFile] = useState(null);

  const [hoveredCallId, setHoveredCallId] = useState(null);

  useEffect(() => {
    const getAudio = async () => {
      if (!recordId || !partnershipId) return;
      try {
        const audio = await getCallRecord(recordId, partnershipId);
        setAudioFile(audio);
      } catch (error) {
        console.error(error);
      }
    };
    getAudio();
  }, []);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      <tr
        onMouseEnter={() => setHoveredCallId(call.id)}
        onMouseLeave={() => setHoveredCallId(null)}
        style={{
          borderTop: "1px solid rgba(234, 240, 250, 1)",
          height: "65px",
        }}
      >
        <td>
          {call.in_out == 1 ? (
            <IncomingIcon />
          ) : call.in_out == 0 ? (
            <OutgoingIcon />
          ) : call.in_out == 2 ? (
            <MissedIcon />
          ) : call.in_out == 3 ? (
            <DontCallIcon />
          ) : null}
        </td>
        <td>
          <p style={{ textAlign: "left" }}>
            {call.date?.split(" ")[1].slice(0, 5)}
          </p>
        </td>
        <td>
          <div
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img
              src={call.person_avatar}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </div>
        </td>
        <td>
          {call.partner_data.name && <p>{call.partner_data.name}</p>}
          {call.partner_data.phone && (
            <p>
              {call.partner_data.phone.replace(
                /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
                "+$1 ($2) $3-$4-$5"
              )}
            </p>
          )}
        </td>
        <td>
          <p>{call.line_name || "Источник не указан"}</p>
        </td>
        <td>
          {randomEvaluation === 1 ? (
            <RatingSpan type={"bad"} />
          ) : randomEvaluation === 2 ? (
            <RatingSpan type={"good"} />
          ) : randomEvaluation === 3 ? (
            <RatingSpan type={"perfect"} />
          ) : (
            <span style={{ color: "rgba(234, 26, 79, 1)" }}>
              {call.errors?.[0] || ""}
            </span>
          )}
        </td>
        <td style={{ width: "528px" }}>
          {(hoveredCallId || isPlayingId === call.id) &&
          call.record.length > 0 ? (
            audioFile && (
              <Player
                recordId={call.record}
                partnershipId={call.partnership_id}
                setHoveredCallId={setHoveredCallId}
                callId={call.id}
                setIsPlayingId={setIsPlayingId}
                isPlayingId={isPlayingId}
                audioFile={audioFile}
              />
            )
          ) : (
            <p style={{ textAlign: "right" }}>{formatTime(call.time)}</p>
          )}
        </td>
      </tr>
    </>
  );
};

export default CallItem;
