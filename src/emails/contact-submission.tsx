import * as React from "react";
import {
  CONTACT_EMAIL,
  CONTACT_DISPLAY_NAME,
} from "@/src/lib/constants/contact";

type ContactSubmissionEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactSubmissionEmail({
  name,
  email,
  message,
}: ContactSubmissionEmailProps) {
  return (
    <div
      style={{
        fontFamily: "'Nunito', 'Segoe UI', sans-serif",
        backgroundColor: "#050505",
        padding: "32px",
        color: "#f5f5f5",
      }}
    >
      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(9,9,11,0.95))",
          borderRadius: "20px",
          border: "1px solid rgba(148,163,184,0.2)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "32px" }}>
              <div
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  fontSize: "12px",
                  color: "#a5b4fc",
                  marginBottom: "12px",
                }}
              >
                New inquiry
              </div>
              <h1
                style={{
                  fontSize: "32px",
                  margin: "0 0 20px",
                  color: "#f8fafc",
                }}
              >
                {CONTACT_DISPLAY_NAME}
              </h1>
              <p
                style={{
                  margin: "0 0 32px",
                  color: "#cbd5f5",
                  lineHeight: 1.6,
                }}
              >
                You just received a new message from the contact page. Reply
                directly to the sender or continue the conversation via your
                shared inbox <strong>{CONTACT_EMAIL}</strong>.
              </p>

              <div
                style={{
                  borderRadius: "16px",
                  padding: "24px",
                  background:
                    "linear-gradient(120deg, rgba(79,70,229,0.15), rgba(236,72,153,0.1))",
                  border: "1px solid rgba(94,96,206,0.35)",
                  marginBottom: "24px",
                }}
              >
                <table
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ fontSize: "15px", color: "#f8fafc" }}
                >
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: "16px" }}>
                        <strong style={{ color: "#cbd5f5" }}>Name</strong>
                        <div style={{ marginTop: "4px" }}>{name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingBottom: "16px" }}>
                        <strong style={{ color: "#cbd5f5" }}>Email</strong>
                        <div style={{ marginTop: "4px" }}>{email}</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong style={{ color: "#cbd5f5" }}>Message</strong>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "16px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(15,23,42,0.6)",
                            border: "1px solid rgba(148,163,184,0.3)",
                            color: "#e2e8f0",
                            lineHeight: 1.6,
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {message}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "#94a3b8",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Sent automatically from codecrest.tech
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

