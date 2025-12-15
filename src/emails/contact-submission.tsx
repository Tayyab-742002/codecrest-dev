import * as React from "react";

type ContactSubmissionEmailProps = {
  name: string;
  email: string;
  message: string;
  inboxEmail: string;
  brandName: string;
};

export function ContactSubmissionEmail({
  name,
  email,
  message,
  inboxEmail,
  brandName,
}: ContactSubmissionEmailProps) {
  const safeMessage = message.trim();
  const preheader = `New contact inquiry from ${name}`;

  const colors = {
    bg: "#F6F7FB",
    card: "#FFFFFF",
    text: "#0F172A",
    muted: "#475569",
    // Darker borders for better visibility across email clients (some lighten thin lines).
    border: "#CBD5E1",
    borderStrong: "#94A3B8",
    accent: "#6D28D9",
    subtleAccentBg: "#F5F3FF",
  } as const;

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      {/* Hidden preheader text */}
      <div
        style={{
          display: "none",
          overflow: "hidden",
          lineHeight: "1px",
          opacity: 0,
          maxHeight: 0,
          maxWidth: 0,
        }}
      >
        {preheader}
      </div>

      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{
          width: "100%",
          backgroundColor: colors.bg,
          padding: "32px 16px",
        }}
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{
                  maxWidth: "640px",
                  width: "100%",
                  backgroundColor: colors.card,
                  border: `2px solid ${colors.borderStrong}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <tbody>
                  {/* Header */}
                  <tr>
                    <td
                      style={{
                        padding: "20px 24px",
                        borderBottom: `1px solid ${colors.borderStrong}`,
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <table
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td style={{ verticalAlign: "middle" }}>
                              <div
                                style={{
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: colors.text,
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {brandName}
                              </div>
                              <div
                                style={{
                                  marginTop: "4px",
                                  fontSize: "13px",
                                  color: colors.muted,
                                }}
                              >
                                New contact inquiry
                              </div>
                            </td>
                            <td
                              align="right"
                              style={{
                                verticalAlign: "middle",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "6px 10px",
                                  borderRadius: "999px",
                                  backgroundColor: colors.subtleAccentBg,
                                  color: colors.accent,
                                  border: `1px solid ${colors.borderStrong}`,
                                  fontSize: "12px",
                                  fontWeight: 700,
                                }}
                              >
                                New
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Body intro */}
                  <tr>
                    <td style={{ padding: "22px 24px 0" }}>
                      <h1
                        style={{
                          margin: 0,
                          fontSize: "18px",
                          lineHeight: 1.4,
                          color: colors.text,
                        }}
                      >
                        Message from {name}
                      </h1>
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: colors.muted,
                        }}
                      >
                        Reply directly to this email to respond (Reply-To is set
                        to{" "}
                        <strong style={{ color: colors.text }}>{email}</strong>)
                        or follow up via your inbox{" "}
                        <strong style={{ color: colors.text }}>
                          {inboxEmail}
                        </strong>
                        .
                      </p>
                    </td>
                  </tr>

                  {/* Details */}
                  <tr>
                    <td style={{ padding: "16px 24px 0" }}>
                      <table
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                        style={{
                          width: "100%",
                          border: `1px solid ${colors.borderStrong}`,
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "12px 14px",
                                borderBottom: `1px solid ${colors.borderStrong}`,
                                backgroundColor: "#FFFFFF",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: colors.muted,
                                  marginBottom: "4px",
                                }}
                              >
                                From
                              </div>
                              <div
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 700,
                                  color: colors.text,
                                }}
                              >
                                {name}
                              </div>
                              <div
                                style={{
                                  marginTop: "2px",
                                  fontSize: "13px",
                                  color: colors.muted,
                                  wordBreak: "break-word",
                                }}
                              >
                                {email}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 14px",
                                backgroundColor: "#FFFFFF",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: colors.muted,
                                  marginBottom: "4px",
                                }}
                              >
                                Inbox
                              </div>
                              <div
                                style={{
                                  fontSize: "13px",
                                  color: colors.text,
                                  wordBreak: "break-word",
                                }}
                              >
                                {inboxEmail}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Message */}
                  <tr>
                    <td style={{ padding: "16px 24px 0" }}>
                      <div
                        style={{
                          borderRadius: "12px",
                          border: `1px solid ${colors.borderStrong}`,
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <div
                          style={{
                            padding: "12px 14px",
                            borderBottom: `1px solid ${colors.borderStrong}`,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: colors.muted,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          Message
                        </div>
                        <div
                          style={{
                            padding: "14px",
                            fontSize: "14px",
                            lineHeight: 1.8,
                            color: colors.text,
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                          }}
                        >
                          {safeMessage}
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td style={{ padding: "18px 24px 22px" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: 1.6,
                          color: colors.muted,
                        }}
                      >
                        This message was sent from the {brandName} contact form.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                style={{
                  marginTop: "12px",
                  fontSize: "11px",
                  color: "#64748B",
                }}
              >
                © {new Date().getFullYear()} {brandName}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
