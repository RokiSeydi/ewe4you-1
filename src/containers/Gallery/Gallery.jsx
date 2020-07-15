import React, { Component } from "react";
import styles from "./Gallery.module.scss";
import Polaroid from "../../components/Polaroid";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Button from "../../components/Button/";
import firebase from "../../firebase";
import { firestore } from "../../firebase";

class Gallery extends Component {
  state = {
    file: "",
    storageRef: "",
    imagesFromDatabase: [],
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
    const array = [...this.state.imagesFromDatabase, url]
    firestore
      .collection("Selfie")
      .doc("testuid")
      .set({
        imgUrls:array,
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
        } else {
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  render() {
    return (
      <>
        <NavigationBar />
        <h1>Selfie-Steem</h1>
        <h3>Upload a photo of yourself and add a comment</h3>
        <div>
          <label className={styles.customfileupload}>
            <input type="file" onChange={this.handleFileChange} />
            Select file
          </label>
          <Button
            link={this.uploadImage}
            className={styles.buttonWrapper}
            text={"Upload picture"}
          />
        </div>
        <section className={styles.gallery}>
          <div className={styles.polaroidContainer}>
            {this.state.imagesFromDatabase.map((url) => (
              <Polaroid src={url} />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;


