import bakedbeanimg from "../assets/wellbeans/bakedbean.png"
import butterbeanimg from "../assets/wellbeans/butterbean.png"
import greenbeanimg from "../assets/wellbeans/greenbean.png"
import kidneybeanimg from "../assets/wellbeans/kidneybean.png"


const wellbeans = {beans: [
    
    {
        "Id": "flourishing",
        "title": "Flourishing",
        "image": bakedbeanimg,
        "text" :"When I am flourishing I find myself ",
        "startUrl" :"",
        "backUrl" :"",
        feelings: ["test1", "test2", "test3", "test4", "test5"],
    },
   
    {
        "Id": "wilting",
        "title": "Wilting",
        "image": butterbeanimg,
        "text" :"When I am beginning to wilt I find myself ",
        "startUrl" :"",
        "backUrl" :"",
        feelings: ["feeling test1", "feeling test2", "feeling test 3"],
    },
   

    {
        "Id": "surviving",
        "title": "Surviving",
        "image": greenbeanimg,
        "text" :"When I am just surviving I find myself ",
        "startUrl" :"",
        "backUrl" :"",
        feelings: [],
    },
  

    {
        "Id": "crisis",
        "title": "Crisis",
        "image": kidneybeanimg,
        "text" :"When I am in crisis I find myself ",
        "startUrl" :"",
        "backUrl" :"",
        feelings: [],
    },

]};

export default wellbeans;