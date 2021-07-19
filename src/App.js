import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import Airtable from "airtable";
import Pagination from './Components/Pagination';

const base = new Airtable({ apiKey: "keybzF83gwBlqyK1y" }).base(
  "app6sBYGS0j6bS8ae"
);

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    base("Content")
      .select({
        // Selecting the first 3 records in Content pipeline:
        maxRecords: 3,
        view: "Content pipeline",
      })
      .eachPage(
        (records, fetchNextPage) => {
          let updatedRecordsArray = [];
          records.forEach((record) => {
            updatedRecordsArray.push({
              id: record.id,
              headline: record.fields.Headline,
              subHeadline: record.fields["Sub-headline"],
              image:
                record.fields &&
                record.fields["Header image"] &&
                record.fields["Header image"][0]
                  ? record.fields["Header image"][0]
                  : null,
            });
          });
          console.log("updatedRecordsArray ", updatedRecordsArray);
          setRecords(updatedRecordsArray);
          fetchNextPage();
        },

        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {records.map((record) => (
        <Card record={record}  key={record.id}></Card>
      ))}
      <Pagination></Pagination>
       </div>

  );
}

export default App;
//record.fields.Sub-headline
//.Header image[1].url
