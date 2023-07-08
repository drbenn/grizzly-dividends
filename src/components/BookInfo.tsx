// // import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
// // import { Box, Heading, IconButton, Text } from '@chakra-ui/react';

// import { useAppDispatch } from '../hooks';
// import { deleteBook } from '../redux/bookSlice';
// import { useHistory } from 'react-router-dom';

// const BookInfo = ({
//   title,
//   author,
//   id,
//   ...rest
// }: {
//   title: string | undefined,
//   author: string | undefined,
//   id: string,
// }) => {
//   const dispatch = useAppDispatch(); // To able to call reducer, functions we use our hook called useAppDispatch
//   const history = useHistory();

//   //Redirecting user to /update-book route with id parameter.
//   const redirect = (id: string) => {
//     history.push(`/update-book/${id}`);
//   };

//   return (
//     <div>
//       <div>
//         <h1>{title}</h1>
//         <h3>{author}</h3>
//       </div>
//       <div>
//         <div onClick={() => dispatch(deleteBook({ id }))}>Delete book</div>
//         <div onClick={() => redirect(id)}>Edit book</div>
//         {/* <IconButton
//           color="#1a202c"
//           aria-label=""
//           icon={<DeleteIcon />}
//           marginRight="1rem"
//           onClick={() => dispatch(deleteBook({ id }))}
//         /> */}
//         {/* <IconButton
//           color="#1a202c"
//           aria-label=""
//           icon={<EditIcon />}
//           onClick={() => redirect(id)}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default BookInfo;
