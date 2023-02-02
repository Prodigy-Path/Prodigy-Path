// const Dashboard = () => {
//   const { user } = useSelector((state) => state.login);
//   const { posts } = useSelector((state) => state.post);

//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {

//     e.preventDefault();
//     dispatch(
//       post({
//         action: 'newPost',
//         user: user._id,
//         text: e.target.text.value,
//         title: e.target.title.value,
//         token: user.token,
//       }),
//     );
//     e.target.title.value = '';
//     e.target.text.value = '';
//   };
//   useEffect(
//     (d) => {
//       dispatch(getPost({ action: 'getPost' }));
//       if (!d.text.includes('http')) return;

//       const url = 'http' + d.text.split('http')[1].split(' ')[0];
//       fetch(
//         `http://api.linkpreview.net/?key=${process.env.REACT_APP_LINK_PREVIEW_KEY}&q=${url}`,
//       )
//         .then((res) => res.json())
//         .then((data) => getPost(data));
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     },
//     [posts],
//   );
//   useEffect(() => {
//     if (!d.text.includes('http')) return;

//     const url = 'http' + d.text.split('http')[1].split(' ')[0];
//     fetch(
//       `http://api.linkpreview.net/?key=${process.env.REACT_APP_LINK_PREVIEW_KEY}&q=${url}`,
//     )
//       .then((res) => res.json())
//       .then((data) => setLinkPreview(data));
//   }, [d.text]);
//   let savedPosts = dispatch(getPost({ action: 'getPost' }));



//   let filtered = posts.filter((element) => element.user === user._id);
//   let sortedFiltered = filtered.sort((a, b) => {
//     return new Date(b.created_at) - new Date(a.created_at);
//   });

//   const isLink =
//     /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
//   const hasLink = ({ d }) => { };
//   return (
//     <>
//       {user.role === 'mentor' ? (
//         <>
//           <form onSubmit={handleSubmit} className='new_post_component'>
//             <Group mr={0} position='together'>
//               <h4>Publish a new article to your protégé's </h4>
//               <Card withBorder p={0} mb={10}>
//                 <TextInput
//                   placeholder='Subject'
//                   name='title'
//                   variant='unstyled'
//                 />
//                 <Textarea placeholder='Body...' name='text' radius={0} />
//               </Card>
//               <Button type='submit' m={0}>
//                 Post
//               </Button>
//             </Group>
//           </form>
//           {sortedFiltered.map((d, idx) => (
//             <div key={idx}>
//               <Card withBorder>
//                 <Group position='together'>
//                   <Image
//                     src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile- picture-973460__340.png'
//                     height={30}
//                     width={30}
//                     p={0}
//                   />
//                   <Text>{user.username}</Text>
//                 </Group>
//                 <Card.Section withBorder>{d.title}</Card.Section>
//                 <Card.Section>
//                   {d.text.includes('http') ? (
//                     <>
//                       {d.text.split('http')[0]}
//                       <LinkPreview
//                         url={'http' + d.text.split('http')[1].split(' ')[0]}
//                       />
//                       {d.text.split('http')[1].split(' ').slice(1).join(' ')}
//                     </>
//                   ) : (
//                     d.text
//                   )}
//                 </Card.Section>
//               </Card>
//             </div>
//           ))}
//         </>
// this is my code
//       this is my reducer:
//       import {createSlice} from '@reduxjs/toolkit';

//       const linkPreviewSlice = createSlice({
//         name: 'linkPreview',
//       initialState: {
//         loading: false,
//       error: null,
//       data: null,
//   },
//       reducers: {
//         fetchLinkPreviewStart: (state) => {
//         state.loading = true;
//       state.error = null;
//       state.data = null;
//     },
//     fetchLinkPreviewSuccess: (state, action) => {
//         state.loading = false;
//       state.error = null;
//       state.data = action.payload;
//     },
//     fetchLinkPreviewFailure: (state, action) => {
//         state.loading = false;
//       state.error = action.payload;
//       state.data = null;
//     },
//   },
// });

//       export const {
//         fetchLinkPreviewStart,
//         fetchLinkPreviewSuccess,
//         fetchLinkPreviewFailure,
// } = linkPreviewSlice.actions;

//       export default linkPreviewSlice.reducer;
//       this is my middleware:
//       const linkPreviewMiddleware = ({dispatch, getState}) => next => action => {
//   if (action.type === GET_LINK_PREVIEW) {
//     const link = action.payload;
//       fetch(`https://api.linkpreview.net/?key=YOUR_API_KEY&q=${link}`)
//       .then(response => response.json())
//       .then(data => {
//         dispatch({ type: GET_LINK_PREVIEW_SUCCESS, payload: data });
//       })
//       .catch(error => {
//         dispatch({ type: GET_LINK_PREVIEW_ERROR, payload: error });
//       });
//   }
//       return next(action);
// };
//       how can i bring them together to get the card.section that has the d.text to use the redux slice and middleware 