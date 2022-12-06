import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function DAO() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (max-width: 760px)").matches
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={
          isMobile
            ? { margin: "0 30px" }
            : {
                maxWidth: 926,
                margin: "auto",
              }
        }
      >
        <p
          style={{
            color: "#8c8d92",
            fontSize: 24,
            fontFamily: "Londrina Solid",
            margin: "40px 0 5px 0",
          }}
        >
          Governance
        </p>
        <p
          style={{
            color: "#14161b",
            fontSize: 56,
            fontFamily: "Londrina Solid",
            margin: 0,
            marginBottom: 26,
          }}
        >
          Nouns DAO
        </p>
        <p
          style={{
            color: "#14161b",
            fontSize: "1.2rem",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Nouns govern <b>Nouns DAO</b>. Nouns can vote on proposals or delegate
          their vote to a third party. A minimum of <b>2 Nouns</b> is required
          to submit proposals.
        </p>
        <div
          style={
            isMobile
              ? {
                  marginBottom: "3rem",
                  borderRadius: 20,
                  border: "1px solid #e2e3e8",
                  marginTop: 20,
                }
              : {
                  display: "flex",
                  marginBottom: "3rem",
                  borderRadius: 20,
                  border: "1px solid #e2e3e8",
                  marginTop: 20,
                }
          }
        >
          <div
            style={
              isMobile
                ? {
                    padding: "1rem 0rem 1.6rem 1.8rem",
                    borderRight: "2px solid #e2e3e8",
                    width: "100%",
                  }
                : {
                    padding: "1rem 2rem 1.6rem 2rem",
                    borderRight: "2px solid #e2e3e8",
                    width: "100%",
                  }
            }
          >
            <p
              style={
                isMobile
                  ? {
                      color: "#8c8d92",
                      fontSize: 24,
                      fontFamily: "Londrina Solid",
                      margin: 0,
                      marginBottom: 16,
                      marginTop: 6,
                    }
                  : {
                      color: "#8c8d92",
                      fontSize: 24,
                      fontFamily: "Londrina Solid",
                      margin: 0,
                      marginBottom: 6,
                      marginTop: 6,
                    }
              }
            >
              Treasury
            </p>
            <div style={isMobile ? {} : { display: "flex" }}>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    fontSize: 36,
                    margin: 0,
                    marginRight: "0.6rem",
                    position: "relative",
                    top: -1,
                  }}
                >
                  Ξ
                </p>
                <p
                  style={
                    isMobile
                      ? {
                          fontSize: 36,
                          fontFamily: "Londrina Solid",
                          margin: 0,
                          marginBottom: 4,
                          paddingRight: 10,
                        }
                      : {
                          fontSize: 36,
                          fontFamily: "Londrina Solid",
                          margin: 0,
                          borderRight: "2px solid #e2e3e8",
                          paddingRight: 10,
                        }
                  }
                >
                  28,296
                </p>
              </div>
              <p
                style={
                  isMobile
                    ? {
                        fontSize: 36,
                        margin: 0,
                        color: "#8c8d92",
                        fontFamily: "Londrina Solid",
                      }
                    : {
                        fontSize: 36,
                        margin: 0,
                        color: "#8c8d92",
                        fontFamily: "Londrina Solid",
                        paddingLeft: 10,
                      }
                }
              >
                $34,590,638.00
              </p>
            </div>
          </div>
          <p
            style={{
              padding: "1rem 2rem",
              margin: 0,
              fontSize: "1rem",
              width: 251,
              minWidth: 251,
              lineHeight: 1.5,
            }}
          >
            This treasury exists for <b>Nouns DAO</b> participants to allocate
            resources for the long-term growth and prosperity of the Nouns
            project.
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                fontFamily: "Londrina Solid",
                fontSize: 40,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Proposals
            </h3>
            <div style={{ display: "flex" }}>
              <p
                style={
                  isMobile
                    ? { display: "none" }
                    : {
                        marginTop: "0.9rem",
                        marginRight: "1.7rem",
                        fontWeight: 500,
                        color: "#8c8d92",
                        fontSize: 16,
                        lineHeight: "22.4px",
                      }
                }
              >
                You have no Votes.
              </p>
              <button
                style={{
                  maxWidth: "10rem",
                  height: "3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  borderRadius: 12,
                  backgroundColor: "#f4f4f8",
                  color: "#8c8d92",
                  border: "1px solid #e2e3e8",
                  padding: "0.375rem 0.75rem",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                }}
              >
                Submit Proposal
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              marginTop: "1.4rem",
              display: "flex",
              border: "1px solid #e2e3e8",
              borderRadius: 16,
              background: "#f4f4f8",
              fontSize: 22,
              color: "inherit",
              marginBottom: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "#8c8d92",
                  margin: 0,
                  marginRight: "0.6rem",
                }}
              >
                001
              </p>
              <p
                style={{
                  fontSize: 22,
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Nouns Archive Expansion
              </p>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={
                  isMobile
                    ? { display: "none" }
                    : {
                        display: "flex",
                        backgroundColor: "rgba(140,141,146,0.1)",
                        color: "rgba(0,0,0,.5019607843137255)",
                        width: "fit-content",
                        marginLeft: "-0.5rem",
                        marginRight: 4,
                        fontWeight: 700,
                        borderRadius: 8,
                        textAlign: "center",
                        border: 0,
                        padding: "0.56rem 0.74rem",
                      }
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="16"
                  width="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p
                  style={{
                    color: "rgba(0,0,0,.5019607843137255)",
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 13.5,
                    marginLeft: 5,
                  }}
                >
                  Ends in a day
                </p>
              </div>
              <p
                style={{
                  margin: "auto",
                  backgroundColor: "#43b369",
                  fontWeight: 700,
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 14,
                  border: 0,
                  padding: "0.36rem 0.65rem",
                }}
              >
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
