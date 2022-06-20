import React,{useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import { query, collection, getDocs, where,getFirestore, doc } from "firebase/firestore";
import './Test.css'

function Test(){
    const firebaseConfig = {
        apiKey: "AIzaSyCSe7KuFEQaKrZHVG-S7nbLW-8MC2j2Eok",
        authDomain: "test-79ac3.firebaseapp.com",
        projectId: "test-79ac3",
        storageBucket: "test-79ac3.appspot.com",
        messagingSenderId: "481578788210",
        appId: "1:481578788210:web:3eb0627ac221a4ed03a9eb",
        measurementId: "G-PVT7S0854L"
      };
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    var arr = [];
    const [user,setUser] = useState("User");
    var [wrong,setWrong] = useState(0);
    var [correct,setCorrect] = useState(0);
    var [score,setScore] = useState(0);
    const [questNo,setQuestNo] = useState(0);
    const [question,setQuestion] = useState("What is your name");
    const [A,setA] = useState("A");
    const [B,setB] = useState("B");
    const [C,setC] = useState("C");
    const [D,setD] = useState("D");
    const [ans,setAns] = useState("");
    const [pointr,setPointr] = useState("none");
    const [display,setDisplay] = useState("flex");
    const [temp,setTemp] = useState("");
    const [questionOver,setQuestionOver] = useState(0);
    const [size,setSize] = useState(0);
    const [final,setFinal] = useState(0);
    useEffect(()=>{
        fetchData();
    },[]);
    const username=(e)=>{
        setPointr("");
        setDisplay("none");
        fetchQuestion();
        e.preventDefault();
    }
    let q,data;
    const fetchData = async (e) =>{
        try {
            const q = query(collection(db, "questions"), where("question", "not-in", ['Questions']));
            const doc = await getDocs(q);
             setSize(doc.size);
             console.log(size)
            for(let i=0;i<size;i++){
                arr.push(i);
            }
            for(let i=size-1;i>0;i--){
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            setFinal(arr[size-1]);
            console.log(arr);
            setTemp(doc);
            
            //data = doc.docs[questNo].data();
          } catch (err) {
            console.error(err);
            //alert("An error occured while fetching user data");
          }
        
    }
    
    const fetchQuestion = (e) =>{
       
        if(arr[questionOver]!=final){
        data = temp.docs[arr[questionOver]].data();
            setQuestion(data.question);
            setA(data.A);
            setB(data.B);
            setC(data.C);
            setD(data.D);
            setAns(data.ans);
            setQuestionOver(questionOver+1);
            console.log(questionOver)
            console.log(questNo);
        }
        else{
            alert("Quiz over");
        }
        e.preventDefault();
    }
    const handleA = (e) =>{
        if(A==ans){
            setCorrect(correct+1);
            setScore(score+1);
            fetchQuestion();
        }
        else{
            setWrong(wrong+1);
            fetchQuestion();
        }
        e.preventDefault();
    }
    const handleB = (e) =>{
        if(B==ans){
            setCorrect(correct+1);
            setScore(score+1);
            fetchQuestion();
        }
        else{
            setWrong(wrong+1);
            fetchQuestion();
        }
        e.preventDefault();
    }
    const handleC = (e) =>{
        if(C==ans){
            setCorrect(correct+1);
            setScore(score+1);
            fetchQuestion();
        }
        else{
            setWrong(wrong+1);
            fetchQuestion();
        }
        e.preventDefault();
    }
    const handleD = (e) =>{
        if(D==ans){
            setCorrect(correct+1);
            setScore(score+1);
            fetchQuestion();
        }
        else{
            setWrong(wrong+1);
            fetchQuestion();
        }
        e.preventDefault();
    }
    return(
        <>
        <div id="body" style={{pointerEvents:`${pointr}`}}>
            <div id="side-panel">
                <div id="greet">
                    <span id="greet1">Hello,</span>
                    <span id="greet2">{user}</span>
                </div>
                <div id="dividor1"></div>
                <div id="ScoreSection">
                    <span id="wrong">Wrong : {wrong}</span>
                    <span id="correct">Correct : {correct}</span>
                    <span>Score : {score}</span>
                </div>
                <div id="dividor2"></div>
                <a href="" id="exit">Exit</a>
            </div>
            <div id="main">
                <div id="TestWindow">
                    <span id="question">{question}</span>
                    <div id="optionSection">
                        <button className="option" onClick={handleA}>{A}</button>
                        <button className="option" onClick={handleB}>{B}</button>
                        <button className="option" onClick={handleC}>{C}</button>
                        <button className="option" onClick={handleD}>{D}</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="form" style={{display:`${display}`}}>
            <input type="text" placeholder="Please enter your name" id="name" onChange={(e)=>setUser(e.target.value)}/>
            <button onClick={username}>Submit</button>
        </div>
        </>
    );
}
export default Test;