import React,{useState,useEffect} from 'react'
import {resumeRef} from "../../firebase/firebase"
import {Modal, ModalHeader, ModalBody, NavLink} from 'reactstrap';
import "./Resume.css"

export default function ResumePdf(props) {
    const [url,setUrl] = useState(null)

    const [modal, setModal] = useState(false);
    
    const {
        className
      } = props;

    const toggle = () => setModal(!modal);

    useEffect(()=>{
        resumeRef.getDownloadURL().then((res)=>setUrl(res))
    },[])
    return (
        <>
            <div>
            <NavLink style={{cursor: "pointer"}} onClick={toggle}>Resume</NavLink>
            <Modal isOpen={modal} size="lg" toggle={toggle} style={{height: "60vh"}} className={className}>
              <ModalHeader toggle={toggle}>My Resume</ModalHeader>
              <ModalBody>
                <iframe src={url} style={{width: "100%",height: "1000px",overflow:"hidden"}}/>
              </ModalBody>
            </Modal>
          </div>
          </>
    )
}
