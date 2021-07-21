import React, { useEffect, useState, useCallback } from "react";
import Card from "./Components/Card";
import Airtable from "airtable";
import Pagination from "./Components/Pagination";
import useViewport from "./Hooks/Viewport";
import { apiKey, baseKey } from "./constances.js";
const base = new Airtable({ apiKey: apiKey }).base(baseKey);

function App() {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const TOTAL_PAGES = 3;
  let NUM_OF_RECORDS;
  let LIMIT = 6;
  const MOBILE_BREAKPOINT = 780;
  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  let currentData = isMobile
    ? records
    : records.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
      );
  let { width } = useViewport();

  useEffect(() => {
    width > MOBILE_BREAKPOINT ? setIsMobile(false) : setIsMobile(true);
  }, [width]);

  useEffect(() => {
    base("Content")
      .select({
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
          NUM_OF_RECORDS = updatedRecordsArray.length;
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
    <>
      {currentData.length ? (
        <div>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {currentData.map((record) => (
              <Card record={record} key={record.id}></Card>
            ))}
          </div>
          {!isMobile ? (
            <Pagination
              onChange={onPageChanged}
              page={currentPage}
              totalPages={TOTAL_PAGES}
            ></Pagination>
          ) : (
            ""
          )}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
