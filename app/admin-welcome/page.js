// // app/admin-welcome/page.js
// //correct one
// "use client"; // Ensures this component is a Client Component

// import { useEffect, useState } from 'react';
// import { useSession, signIn } from 'next-auth/react';
// import Link from 'next/link'; // Import Link

// export default function AdminWelcome() {
//   const { data: session, status } = useSession(); // Using useSession on the client side
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleSession = async () => {
//       if (status === 'loading') {
//         return; // Wait until the session status is resolved
//       }

//       if (!session) {
//         signIn(); // Redirect to login if no session
//       } else {
//         try {
//           const response = await fetch('/api/admin/fetchUsers');
//           if (!response.ok) {
//             throw new Error('Failed to fetch users');
//           }
//           const data = await response.json();
//           setUsers(data);
//         } catch (error) {
//           console.error('Error fetching users:', error);
//         }
//       }

//       setLoading(false); // Ensure loading is turned off
//     };

//     handleSession();
//   }, [session, status]);

//   if (status === 'loading' || loading) {
//     return <div>Loading...</div>; // Provide feedback during loading or session check
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen p-4">
//       <h1 className="text-3xl font-bold mb-6">Welcome to Admin</h1>
//       <h2 className="text-xl mb-4">Manage Your Content</h2>
//       <div className="flex flex-wrap justify-center gap-4 mb-6">
//         <Link
//           href={session ? "/submissions" : "/login"}
//           className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
//         >
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2 text-blue-500">Submissions</h3>
//             <p className="text-gray-600">View and manage all submissions.</p>
//           </div>
//         </Link>
//         <Link
//           href={session ? "/users" : "/login"}
//           className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
//         >
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2 text-blue-500">Registered Users</h3>
//             <p className="text-gray-600">View the list of registered users.</p>
//           </div>
//         </Link>
//         <Link
//           href={session ? "/add-problems" : "/login"}
//           className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
//         >
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2 text-blue-500">Add Problem Statements</h3>
//             <p className="text-gray-600">Add and manage problem statements for the platform.</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }




"use client"; // Ensures this component is a Client Component

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function AdminWelcome() {
  const { data: session, status } = useSession(); // Using useSession on the client side
  const [solvedProblems, setSolvedProblems] = useState([]); // State to store solved problems
  const [users, setUsers] = useState([]); // State to store registered users
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [showSolvedProblems, setShowSolvedProblems] = useState(false); // State to control the visibility of solved problems
  const [hideButtons, setHideButtons] = useState(false); // State to control visibility of other buttons
  const router = useRouter(); // Access Next.js router

  useEffect(() => {
    const handleSession = async () => {
      if (status === "loading") {
        return; // Wait until the session status is resolved
      }

      if (!session) {
        signIn(); // Redirect to login if no session
      } else {
        try {
          // Fetch solved problems
          const solvedProblemsResponse = await fetch("/api/solvedProblems");
          const solvedProblemsData = await solvedProblemsResponse.json();
          setSolvedProblems(solvedProblemsData);

          // Fetch registered users
          const usersResponse = await fetch("/api/admin/fetchUsers");
          if (!usersResponse.ok) {
            throw new Error("Failed to fetch users");
          }
          const usersData = await usersResponse.json();
          setUsers(usersData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      setLoading(false); // Ensure loading is turned off
    };

    handleSession();
  }, [session, status]);

  const handleShowProblems = () => {
    setShowSolvedProblems(true); // Make solved problems visible when button is clicked
    setHideButtons(true); // Hide the other buttons after clicking on "Submissions"
    router.push("#submissions"); // Scroll to the submissions section
  };

  const handleBackToAdmin = () => {
    setShowSolvedProblems(false); // Hide solved problems
    setHideButtons(false); // Show the other buttons
    router.push("/admin-welcome"); // Navigate back to the admin page
  };

  if (status === "loading" || loading) {
    return <div>Loading...</div>; // Provide feedback during loading or session check
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      {/* Only show this section if showSolvedProblems is false */}
      {!showSolvedProblems && (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to Admin</h1>
          <h2 className="text-xl mb-4">Manage Your Content</h2>
        </>
      )}

      {/* Conditionally render buttons if hideButtons is false */}
      {!hideButtons && !showSolvedProblems && (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
            onClick={handleShowProblems}
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-500 text-center">
                Submissions
              </h3>
              <p className="text-gray-600">View and manage all submissions.</p>
            </div>
          </button>

          <Link
            href={session ? "/users" : "/login"}
            className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-10">
              <h3 className="text-xl font-semibold mb-2 text-blue-500 text-center">
                Registered Users
              </h3>
              <p className="text-gray-600">
                View the list of registered users.
              </p>
            </div>
          </Link>

          <Link
            href={session ? "/add-problems" : "/login"}
            className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-500 text-center">
                Add Problem Statements
              </h3>
              <p className="text-gray-600">
                Add and manage problem statements for the platform.
              </p>
            </div>
          </Link>


          <Link
            href={session ? "/submissions" : "/login"}
            className="block w-60 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-500 text-center">
                Submission's Users Name
              </h3>
              <p className="text-gray-600">View and manage submissions.</p>
            </div>
          </Link>
        </div>
      )}

      {/* Back button to return to admin page */}
      {showSolvedProblems && (
        <button
          onClick={handleBackToAdmin}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Admin
        </button>
      )}

      {showSolvedProblems && (
        <div className="flex flex-col space-y-6 mb-6">
          {solvedProblems.map((solvedProblem) => (
            <div
              key={solvedProblem._id}
              className="p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {solvedProblem.problem
                  ? solvedProblem.problem.title
                  : "Untitled Problem"}
              </h3>

              {/* Solution Section */}
              {solvedProblem.solution.map((solution, index) => (
                <div key={solution._id} className="mb-4 border-t pt-4">
                  <h4 className="text-xl font-semibold text-red-500">
                    Solution {index + 1}
                  </h4>
                  <pre className="bg-gray-600 p-4 rounded-md">
                    {solution.code}
                  </pre>
                  <p className="text-gray-600">
                    Complexity: {solution.complexity.join(", ")}
                  </p>
                  <p className="text-gray-600">Status: {solution.status}</p>
                  <p className="text-gray-600">
                    Passed Test Cases: {solution.passedTestCases}
                  </p>
                  <p className="text-gray-600">
                    Submitted At:{" "}
                    {new Date(solution.submissionTime).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
