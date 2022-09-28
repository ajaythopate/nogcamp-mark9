import React from "react";
import "./styles.css";

export default function App() {
  var [Ranking, setranking] = React.useState("India");

  var List = {
    India: [
      {
        name: "Board of Control for Cricket in India"
      },
      {
        Rank: "rank-1"
      },

      {
        matches: "matches-51"
      },
      {
        points: "points-13638"
      },
      {
        Rating: "rating-267"
      }
    ],
    Englend: [
      {
        name: "England and Wales Cricket Board"
      },
      {
        Rank: "rank-2"
      },
      {
        matches: "matches-37"
      },
      {
        points: "points-9729"
      },
      {
        Rating: "rating-263"
      }
    ],

    Africa: [
      {
        name: "Cricket South Africa"
      },
      {
        Rank: "rank-3"
      },
      {
        matches: "matches-34"
      },
      {
        points: "points-8787"
      },
      {
        Rating: "rating-258"
      },
      {
        discription:
          "Cricket South Africa is the governing body for both professional and amateur cricket in South Africa. In 1991, the separate South African Cricket Union and the South African Cricket Board merged to form the United Cricket Board of South Africa, ending enforced racial separation governance in South African cricket"
      }
    ]
  };
  return (
    <div className="App">
      <h1>🏏 ICC Ranking🏏</h1>
      <h3>Checkout ICC..... Ranking..</h3>
      <div class="btn-container">
        {Object.keys(List).map((Ranking) => (
          <button
            style={{ padding: "5px", borderRadius: "8px", margin: "5px" }}
            onClick={() => setranking(Ranking)}
          >
            {Ranking}{" "}
          </button>
        ))}
      </div>

      <hr />
      <div>
        {List[Ranking].map((Ranking) => (
          <div style={{ padding: "10px" }}>
            <div>
              <h2>{Ranking.name}</h2>
            </div>

            <h3>{Ranking.Rank}</h3>
            <h4>{Ranking.matches}</h4>
            <h5>{Ranking.points}</h5>
            <h6>{Ranking.Rating}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
