import Head from "next/head";
import styles from "../styles/Home.module.css";
import { IsAdmin, IsURL } from "../lib/utils";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "next/error";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { modsRepo } from "../lib/filehelper";
import { GetServerSideProps } from "next";
import Router from "next/router";
import Redirect from "../components/Redirect";

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }) => {
  var shouldRefresh = false;
  if (query["modName"] && query["repoUrl"] && query["iconUrl"] && query["modDesc"]) {
    modsRepo.create(query);
    shouldRefresh = true;
  }
  return { props: { shouldRefresh } };
}

export default function AddMod(props: any) {
  if (props.shouldRefresh) {
    return <Redirect url="/" />
  }

  const isAdmin = IsAdmin();
  const [error1, setError1] = useState(true);
  const [error2, setError2] = useState(true);

  const [modName, setModName] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [modDesc, setModDesc] = useState("");

  if (!isAdmin) {
    return <Error statusCode={403} withDarkMode={true} />;
  }

  function addNewMod(_: any) {
    location.href = `/addmod?modName=${modName}&repoUrl=${repoUrl}&iconUrl=${iconUrl}&modDesc=${modDesc}`;
  }

  return (
    <>
      <main className={styles.main}>
        <Header />

        <div className={styles.centerChildren}>
          <TextField
            label="Mod Name"
            variant="outlined"
            onChange={(e: any) => setModName(e.target.value)}
          />
          <TextField
            label="GitHub Repo URL"
            variant="outlined"
            onChange={
              (e: any) => {
                setError1(!IsURL(e.target.value) || e.target.value == "");
                setRepoUrl(e.target.value);
              }
            }
            error={error1}
          />
          <TextField
            label="Icon URL"
            variant="outlined"
            onChange={
              (e: any) => {
                setError2(!IsURL(e.target.value) || e.target.value == "");
                setIconUrl(e.target.value);
              }
            }
            error={error2}
          />
          <TextField
            label="Mod Description"
            multiline
            rows={4}
            onChange={
              (e: any) => {
                setModDesc(e.target.value);
              }
            }
          />
          <Button
            variant="contained"
            onClick={addNewMod}
            disabled={error1 || error2}
          >Submit</Button>
        </div>
        
        <Footer />
      </main>
    </>
  );
}
