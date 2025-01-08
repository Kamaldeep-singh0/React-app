import { useState } from "react";


const AboutUs: React.FC =()=>{
        const [current,setCurrent] = useState("")
      return (  <div>
              <Section name={"About us"} 
              description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
              isVisible = {current==="about us"}
              setIsVisible={(section)=>{ current === section ? setCurrent("") : setCurrent(section) }}
              />
             
              <Section name={"Career"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
               isVisible = {current==="career"}
               setIsVisible={(section)=>{ current === section ? setCurrent("") : setCurrent(section) }}
              />
              <Section name={"Contact us"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
               isVisible = {current==="contact us"}
               setIsVisible={(section)=>{ current === section ? setCurrent("") : setCurrent(section) }}
              />
            </div>
            );
} 

interface SectinProps {
  name : string ;
  description : string;
  isVisible : boolean;
  setIsVisible : (section : string)=> void
}

const Section : React.FC<SectinProps> = ({name , description , isVisible , setIsVisible })=>{
  return ( <div className="m-2 p-2 bg-orange-200"> 
     <div className="p-2 text-xl font-bold border-black">{name}</div>
      { isVisible ? ( <>
        <button className="underline px-3" onClick={()=>{setIsVisible("")}}>Hide</button>
        <div className="p-2">{description}</div>
        </>
      ):
      ( <button className="underline px-3" onClick={()=>{setIsVisible(name.toLowerCase())}}>Show</button>)
      
      } 
      
      
    </div>
   );
}

export default AboutUs;