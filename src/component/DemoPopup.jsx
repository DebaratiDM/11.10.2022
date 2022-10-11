// import React, { useEffect, useState } from "react";
// // import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// export const DemoPopup = () => {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setShow(true);
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       <Modal show={show}>
//         <Modal.Header close Button onClick={() => setShow(false)}>
//           <Modal.Title>Your Feedback</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form action="">
//             <div className="form-group">
//               <label htmlFor="email">Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div class="form-group">
//               <label for="exampleFormControlTextarea1">Commend:</label>
//               <textarea
//                 class="form-control"
//                 id="exampleFormControlTextarea1"
//                 rows="3"
//               ></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };
