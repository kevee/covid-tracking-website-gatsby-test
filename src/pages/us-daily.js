import React from "react"
import { graphql } from "gatsby"
import { DateTime } from "luxon"
import Layout from "../components/layout"
import Footer from "../components/layout/footer"

const ContentPage = ({ data }) => (
  <Layout>
    <h1>US Historical Data</h1>

    <p>
      <strong>
        Cumulative record of our daily totals. Each day's total is as of 4pm ET
        that day, so data that comes in from states after that cut-off will show
        in the <em>next</em> day's total.
      </strong>
    </p>
    <p>
      We also have <a href="/data/">the recent data broken out by state</a> on
      this site. Get the entire dataset as a{" "}
      <a href="https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vRwAqp96T9sYYq2-i7Tj0pvTf6XVHjDSMIKBdZHXiCGGdNC0ypEU9NbngS8mxea55JuCFuua1MUeOj5/pubhtml">
        spreadsheet
      </a>{" "}
      or via <a href="/api/">API (JSON and CSV)</a>,{" "}
      <a href="/about-tracker/">learn how this project works</a>, or{" "}
      <a href="/newsroom-expert-faq/">
        dig into detailed documentation on the data itself
      </a>
      .
    </p>

    <p class="updated">Last synced with our spreadsheet: 3/23 15:33 ET</p>

    <div className="us-days">
      <div className="table-scroll">
        <table className="day-table">
          <caption>US Daily Cumulative Totals - 4 pm ET</caption>
          <thead>
            <tr>
              <th scope="col" className="text-left">
                Date
              </th>
              <th scope="col">States Tracked</th>
              <th scope="col">Positive</th>
              <th scope="col">Negative</th>
              <th scope="col">Pos + Neg</th>
              <th scope="col">Pending</th>
              <th scope="col">Hospitalized</th>
              <th scope="col">Deaths</th>
              <th scope="col">Total Tests</th>
            </tr>
          </thead>
          <tbody>
            {data.allCovidUsDaily.edges.map(({ node }) => (
              <tr>
                <td className="text-left">
                  {DateTime.fromFormat(node.date + "", "yyyyMMdd").toFormat(
                    "dd LLL yyyy ccc"
                  )}
                </td>
                <td>{node.states}</td>
                <td>{node.positive.toLocaleString()}</td>
                <td>{node.negative.toLocaleString()}</td>
                <td>{node.posNeg.toLocaleString()}</td>
                <td>{node.pending.toLocaleString()}</td>
                <td>
                  {node.hospitalized
                    ? node.hospitalized.toLocaleString()
                    : "N/A"}
                </td>
                <td>{node.death ? node.death.toLocaleString() : "N/A"}</td>
                <td>{node.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default ContentPage

export const query = graphql`
  query {
    allCovidUsDaily(sort: { order: DESC, fields: date }) {
      edges {
        node {
          total
          states
          positive
          pending
          posNeg
          negative
          hospitalized
          death
          date
        }
      }
    }
  }
`
