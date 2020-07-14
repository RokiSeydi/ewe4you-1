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
    storageRefs: [],
    imagesFromDatabase: [],
  };

  setImage = () => {
    console.log('function called')
    firestore
      .collection("Selfie")
      .doc("testuid")
      .set({
        imgUrls: this.state.imagesFromDatabase
      })
      // .then((querySnapshot) => {
      //   const imageRefs = querySnapshot.docs.map((doc) => doc.data());
      //   this.setState({ imageRefs });
      // })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // this.setImage();
  }

  getImages = () => {
    this.state.storageRefs.forEach((image) => {
      //create a storage reference
      let storage = firebase.storage().ref(image);
      //get file url
      storage
        .getDownloadURL()
        .then((url) => {
          this.setState({
            imagesFromDatabase: [...this.state.imagesFromDatabase, url],
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  uploadMeTing = () => {
    if (this.state.file) {
      console.log("hello");
      // Store the storage refs in the database
      const storage = firebase.storage().ref(this.state.file.name);
      const upload = storage.put(this.state.file);
      upload.on(
        "state_changed",
        // upload progress function
        (snapshot) => {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // place to include progress bar if wanted
        },
        // upload failed function
        (err) => {
          console.error(err);
          alert("upload failed");
        },
        // upload complete function
        () => {
          console.log("upload complete");
          alert("file uploaded");
          this.getImages();
        }
      );
    } else {
      alert("No file chosen");
    }
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      storageRefs: [...this.state.storageRefs, e.target.files[0].name],
    });
  };
  render() {
    return (
      <>
        <NavigationBar />
        <h1>Selfie-Steam</h1>
        <h3>Upload a photo of yourself and add a comment</h3>
        <div>
        <label className={styles.customfileupload}>
          <input type="file" onChange={this.handleFileChange}/>
        Select file
        </label>
              <Button
                link={this.uploadMeTing}
                className={styles.buttonWrapper}
                text={"Upload picture"}
              />
            </div>
        <section className={styles.gallery}>
          <div className={styles.polaroidContainer}>
          {this.state.imagesFromDatabase.map((img) => (
              <Polaroid 
              setImage = {this.state.imageRef} />
            ))}
        
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;

