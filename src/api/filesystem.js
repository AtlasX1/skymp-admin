const dropboxV2Api = window.require("dropbox-v2-api");
const fs = window.require("fs");

const token =
  "WwO5rFqk51EAAAAAAAAAAZ-Bzg3V3Zgg-296e7RXjTMrw9JVGHmlxS08eX9q8Ham";

const dropbox = dropboxV2Api.authenticate({
  token,
});

const download = (onStart = () => {}, onEnd = () => {}) => {
  onStart();
  dropbox(
    {
      resource: "files/download",
      parameters: {
        path: "/Skymp/skseZIP.7z",
      },
    },
    (err, result, response) => {
      if (err) {
        return console.log("err:", err);
      }
    }
  )
    .pipe(fs.createWriteStream("D:/test/data.7z"))
    .on("finish", () => {
      onEnd();
     
    });
};

export default download;
