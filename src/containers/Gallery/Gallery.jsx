import React, { Component } from "react";
import styles from "./Gallery.module.scss";
import Polaroid from "../../components/Polaroid";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Button from "../../components/Button/";
import firebase from "../../firebase";
import { firestore } from "../../firebase";

class Gallery extends Component {
  state = {
    file: [],
    storageRef: "",
    imagesFromDatabase: [],
    caption: "",
  };
  componentDidMount = () => {
    this.getFileFromDatabase();
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      storageRef: e.target.files[0].name,
    });
  };

  uploadImage = () => {
    // Need to make delete what we have in this.state.caption
    if (this.state.file) {
      const storage = firebase.storage().ref(this.state.storageRef);
      const upload = storage.put(this.state.file);
      upload.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },

        (err) => {
          console.error(err);
          alert("upload failed");
        },

        () => {
          alert("file uploaded");
          this.getDownloadURL(this.state.storageRef);
        }
      );
    } else {
      alert("No file chosen");
    }
  };

  getDownloadURL = (storageRef) => {
    let storage = firebase.storage().ref(storageRef);
    storage
      .getDownloadURL()
      .then((url) => {
        this.storeDownloadUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  storeDownloadUrl = (url) => {
    const newImageObject = { url: url, caption: this.state.caption };
    const array = [...this.state.imagesFromDatabase, newImageObject];
    firestore
      .collection("Selfie")
      .doc("testuid")
      .set({
        imgUrls: array,
      })
      .then(this.getFileFromDatabase())
      .catch((err) => console.log(err));
  };

  getFileFromDatabase = () => {
    const docRef = firestore.collection("Selfie").doc("testuid");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({ imagesFromDatabase: doc.data().imgUrls });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  uploadComment = () => {
    console.log(this.state.caption);
    let userCaption = prompt("Please enter your caption");
    console.log(userCaption);
    this.setState({ caption: userCaption }, () =>
      console.log(this.state.caption)
    );
  };

  // checkFormCompleted = () => {
  //   let isCompleted = true;
  //   for (const field in (this.state.caption) && (this.state.imagesFromDatabase)) {
  //     if ((this.state.caption) && (this.state.imagesFromDatabase) === "") {
  //       return
  //       isCompleted = false
  //   }
  //   return isCompleted;
  // };

  // checkFormCompleted = () => {
  //   let isCompleted = true;
  //   for (const field in (this.state.caption) && (this.state.imagesFromDatabase)) {
  //     if ((this.state.caption[field] === "") && (this.state.imagesFromDatabase[field] === "")) {
  //       console.log('both have been uploaded')
  //       return isCompleted = false;
  //     } else {
  //      console.log('not yet')
  //     }
  //   }
  //   return isCompleted;
  // };

  checkFormCompleted = () => {
    let isCompleted = true;
    if (this.state.caption === "" || this.state.file === []) {
      console.log("You forgot to upload a comment");
      isCompleted = false;
    }
    return isCompleted;
  };


  render() {
    this.checkFormCompleted()
    return (
      <>
        <NavigationBar />
        <h1>Selfie-Steem</h1>
        <h3>Upload a photo of yourself and add a comment</h3>
        <div className={styles.buttonSection}>
          <label className={styles.customfileupload}>
            <input type="file" onChange={this.handleFileChange} />
            Select file
          </label>
          <Button
            link={this.uploadComment}
            className={styles.buttonWrapper}
            text={"Add Comment"}
          />
          <Button
            link={this.uploadImage}
            className={styles.buttonWrapper}
            text={"Upload"}
            disabled={!this.checkFormCompleted()}
          />
        </div>
        <section className={styles.gallery}>
          <div className={styles.polaroidContainer}>
            {this.state.imagesFromDatabase.map((imageObject) => (
              <Polaroid src={imageObject.url} text={imageObject.caption} />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;
