import { leadRows } from "../lib/content";
import { Eyebrow } from "./ui";

export default function LeadTable() {
  return (
    <section className="section" id="attribution">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Lead Attribution</Eyebrow>
          <h2>Know Exactly Where Every Lead Came From</h2>
          <p>
            No more wondering which ad is actually working. Every lead that comes in gets tagged
            with the ad, the platform and the date — right there in your dashboard.
          </p>
        </div>

        <div className="table-wrap" data-anim="zoom-in">
          <table>
            <thead>
              <tr>
                <th scope="col">Lead name</th>
                <th scope="col">Came from</th>
                <th scope="col">Campaign</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {leadRows.map((row) => (
                <tr key={row.name}>
                  <td className="lead-name">{row.name}</td>
                  <td>
                    <span className={`pill ${row.sourceTone}`}>{row.source}</span>
                  </td>
                  <td>{row.campaign}</td>
                  <td>
                    {row.date} · {row.time}
                  </td>
                  <td>
                    <span className={`pill ${row.statusTone}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="table-note" data-anim="fade-up">
          This is exactly what you&apos;ll see in your own dashboard — updated live, every time a
          new lead comes in.
        </p>
      </div>
    </section>
  );
}
