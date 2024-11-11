// 'use client'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsPage = () => {
//   const [stories, setStories] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('top');
//   const [pageTitle, setPageTitle] = useState('Top News Articles');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         let url;

//         if (selectedOption === 'new') {
//           url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
//         } else {
//           url = `https://hacker-news.firebaseio.com/v0/${selectedOption}stories.json`;
//         }

//         const response = await axios.get(url);
//         const storyIds = response.data;

//         if (!Array.isArray(storyIds)) {
//           console.warn(`No story IDs found for ${selectedOption}stories`);
//           setStories([]);
//           return;
//         }

//         const storyPromises = storyIds.slice(0, 20).map(storyId =>
//           axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
//             .then(response => response.data)
//         );

//         Promise.all(storyPromises)
//           .then(stories => {
//             setStories(stories);
//           })
//           .catch(error => {
//             console.error('Error fetching stories:', error);
//           });
//       } catch (error) {
//         console.error(`Error fetching ${selectedOption} story IDs:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [selectedOption]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     const title = option === 'top' ? 'Top News Articles' : option === 'new' ? 'Newest Articles' : 'Job Listings';
//     setPageTitle(title);
//     document.title = title; 
//   };

//   // return (
//     // <div className="mx-auto flex justify-center min-h-screen">
//     //   <div className="w-full max-w-6xl p-4 my-6 flex gap-12 mx-auto flex-col">
//     //     <div className='bg-dark-1 text-white h-fit mx-auto w-full max-w-sm rounded-xl p-2 flex flex-col'>
//     //       <div className="flex justify-between">
//     //         <button
//     //           className={`option-button w-full py-3 px-2 rounded-t-xl ${selectedOption === 'top' ? 'bg-white text-dark-1 selected font-medium' : ''}`}
//     //           onClick={() => handleOptionChange('top')}
//     //         >
//     //           Top
//     //         </button>
//     //         <button
//     //           className={`option-button w-full py-3 px-2 rounded-t-xl ${selectedOption === 'new' ? 'bg-white text-dark-1 selected font-medium' : ''}`}
//     //           onClick={() => handleOptionChange('new')}
//     //         >
//     //           Newest
//     //         </button>
//     //         <button
//     //           className={`option-button w-full py-3 px-2 rounded-t-xl ${selectedOption === 'job' ? 'bg-white text-dark-1 selected font-medium' : ''}`}
//     //           onClick={() => handleOptionChange('job')}
//     //         >
//     //           Jobs
//     //         </button>
//     //       </div>
//     //       <div className='bg-white py-8 px-2 rounded-b-xl'>
//     //         <h1 className="text-2xl font-bold text-center text-dark-1">{pageTitle}</h1>
//     //       </div>
//     //     </div>
//     //     <ol className="w-full max-w-6xl flex flex-wrap items-start mx-auto justify-center gap-4">
//     //       {loading && 
//     //         <img src="/loader.svg" className='w-12 h-12 my-12 object-contain mx-auto' />
//     //       }
//     //       {!loading && stories.map((story, index) => (
//     //         <a key={story.id} className="flex items-center w-full max-w-md p-4 rounded-xl hover:mt-[-7px] bg-light-2 hover:bg-dark-1 group transition-all ease-in" href={story.url} target="_blank" rel="noopener noreferrer">
//     //           <span className="text-xl font-bold text-gray-500 pr-4 group-hover:text-gray-400 transition-all ease-in">
//     //             {index + 1}
//     //           </span>
//     //           <div className="">
//     //             <h2 className="group-hover:text-white transition-all ease-in">{story.title}</h2>
//     //             <div className="flex flex-wrap gap-1 items-end">
//     //               <span className='text-orange-600 group-hover:text-orange-400 transition-all ease-in'>{story.by ? `source: ${story.by}` : ''}</span>
//     //               <span className='text-sm text-gray-700 group-hover:text-gray-400 transition-all ease-in'> • {story.score} points</span>
//     //               <span className='text-sm text-gray-700 group-hover:text-gray-400 transition-all ease-in'> • {story.descendants || 0} comments</span>
//     //             </div>
//     //             <p className='text-blue-600 group-hover:text-blue-400 transition-all ease-in'>
//     //               Read More
//     //             </p>
//     //           </div>
//     //         </a>
//     //       ))}
//     //     </ol>
//     //   </div>
//     // </div>
//   // );
// };

// export default NewsPage;







// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SolvedProblemsPage = () => {
//   const [solvedProblems, setSolvedProblems] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchSolvedProblems = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('/api/solvedProblems');
//         setSolvedProblems(response.data);
//       } catch (error) {
//         console.error('Error fetching solved problems:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSolvedProblems();
//   }, []);

//   return (
//     <section className="flex flex-col justify-center items-center min-h-[72vh]">
//       <h1 className="text-2xl font-bold mb-4">Solved Problems</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="w-full max-w-[800px]">
//           {solvedProblems.map((solvedProblem) => (
//             <li key={solvedProblem._id} className="mb-4 p-4 border rounded shadow">
//               <h2 className="text-xl font-semibold">
//                 {solvedProblem.problem.title}
//               </h2>
//               <p>Contest: {solvedProblem.contest?.name || 'N/A'}</p>
//               {solvedProblem.solution.map((solution, index) => (
//                 <div key={index} className="mt-2">
//                   <p><strong>Code:</strong> {solution.code}</p>
//                   <p><strong>Complexity:</strong> {solution.complexity.join(', ')}</p>
//                   <p><strong>Submission Time:</strong> {new Date(solution.submissionTime).toLocaleString()}</p>
//                   <p><strong>Status:</strong> {solution.status}</p>
//                   <p><strong>Passed Test Cases:</strong> {solution.passedTestCases}</p>
//                 </div>
//               ))}
//               <p><strong>Star:</strong> {solvedProblem.star ? 'Yes' : 'No'}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default SolvedProblemsPage;



// app/solvedproblems/page.js
// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SolvedProblemsPage = () => {
//   const [solvedProblems, setSolvedProblems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSolvedProblems = async () => {
//       try {
//         const response = await axios.get('/api/solvedProblems');
//         setSolvedProblems(response.data);
//       } catch (error) {
//         console.error('Error fetching solved problems:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSolvedProblems();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="flex flex-col justify-center items-center min-h-screen p-4">
//       <h1 className="text-3xl font-bold mb-6">Solved Problems</h1>
//       <ul className="w-full max-w-[800px]">
//         {solvedProblems.map((solvedProblem) => (
//           <li key={solvedProblem._id} className="mb-4 p-4 border rounded shadow">
//             <h2 className="text-xl font-semibold">
//               {solvedProblem.problem?.title || 'Untitled Problem'}
//             </h2>
//             <p>Contest: {solvedProblem.contest?.name || 'N/A'}</p>
//             {solvedProblem.solution.map((solution, index) => (
//               <div key={index} className="mt-2">
//                 <p><strong>Code:</strong> {solution.code}</p>
//                 <p><strong>Complexity:</strong> {solution.complexity.join(', ')}</p>
//                 <p><strong>Submission Time:</strong> {new Date(solution.submissionTime).toLocaleString()}</p>
//                 <p><strong>Status:</strong> {solution.status}</p>
//                 <p><strong>Passed Test Cases:</strong> {solution.passedTestCases}</p>
//               </div>
//             ))}
//             <p><strong>Star:</strong> {solvedProblem.star ? 'Yes' : 'No'}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default SolvedProblemsPage;


// app/solvedproblems/page.js
"use client";

import { useEffect, useState } from 'react';

export default function SolvedProblemsPage() {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const response = await fetch('/api/solvedProblems');
        if (response.ok) {
          const data = await response.json();
          setSolvedProblems(data);
        } else {
          console.error('Failed to fetch solved problems');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolvedProblems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Solved Problems</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {solvedProblems.map((solvedProblem) => (
          <div key={solvedProblem._id} className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">{solvedProblem.problem?.title || 'Untitled Problem'}</h3>
              <p className="text-gray-600">Contest: {solvedProblem.contest?.name || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
