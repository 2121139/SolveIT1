




"use client";
import { useState } from 'react';


export default function AddProblems() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    problemStatement: '',
    inputFormat: '',
    outputFormat: '',
    sampleInput: '',
    sampleOutput: '',
    likes: 10,
    dislikes: 0,
    order: '',
    category: '',
    constraints: '',
    companies: '',
    starterCode: '',
    difficulty: 'Easy',
    solution: '',
    videoId: '',
    testCases: [{ input: '', output: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTestCaseChange = (e, index, type) => {
    const { value } = e.target;
    const updatedTestCases = formData.testCases.map((testCase, i) =>
      i === index ? { ...testCase, [type]: value.split(',') } : testCase
    );
    setFormData((prevData) => ({
      ...prevData,
      testCases: updatedTestCases,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Problem added successfully!');
        setFormData({
          id: '',
          title: '',
          problemStatement: '',
          inputFormat: '',
          outputFormat: '',
          sampleInput: '',
          sampleOutput: '',
          likes: 10,
          dislikes: 0,
          order: '',
          category: '',
          constraints: '',
          companies: '',
          starterCode: '',
          difficulty: 'Easy',
          solution: '',
          videoId: '',
          testCases: [{ input: '', output: '' }],
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Add New Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-6 text-black">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-black">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="ID"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="problemStatement" className="block text-sm font-medium text-black">Problem Statement</label>
            <textarea
              id="problemStatement"
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              placeholder="Problem Statement"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
              rows="4"
              required
            />
          </div>
          <div>
            <label htmlFor="inputFormat" className="block text-sm font-medium text-black">Input Format</label>
            <input
              type="text"
              id="inputFormat"
              name="inputFormat"
              value={formData.inputFormat}
              onChange={handleChange}
              placeholder="Input Format"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="outputFormat" className="block text-sm font-medium text-black">Output Format</label>
            <input
              type="text"
              id="outputFormat"
              name="outputFormat"
              value={formData.outputFormat}
              onChange={handleChange}
              placeholder="Output Format"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="sampleInput" className="block text-sm font-medium text-black">Sample Input</label>
            <input
              type="text"
              id="sampleInput"
              name="sampleInput"
              value={formData.sampleInput}
              onChange={handleChange}
              placeholder="Sample Input"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="sampleOutput" className="block text-sm font-medium text-black">Sample Output</label>
            <input
              type="text"
              id="sampleOutput"
              name="sampleOutput"
              value={formData.sampleOutput}
              onChange={handleChange}
              placeholder="Sample Output"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-black">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="constraints" className="block text-sm font-medium text-black">Constraints</label>
            <input
              type="text"
              id="constraints"
              name="constraints"
              value={formData.constraints}
              onChange={handleChange}
              placeholder="Constraints"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="starterCode" className="block text-sm font-medium text-black">Starter Code</label>
            <textarea
              id="starterCode"
              name="starterCode"
              value={formData.starterCode}
              onChange={handleChange}
              placeholder="Starter Code"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
              rows="4"
            />
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-black">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor="solution" className="block text-sm font-medium text-black">Solution</label>
            <textarea
              id="solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              placeholder="Solution"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
              rows="4"
            />
          </div>
          {formData.testCases.map((testCase, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label htmlFor={`input-${index}`} className="block text-sm font-medium text-black">Test Case Input (comma separated)</label>
                <input
                  type="text"
                  id={`input-${index}`}
                  name="input"
                  value={testCase.input}
                  onChange={(e) => handleTestCaseChange(e, index, 'input')}
                  placeholder="Test Case Input"
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                />
              </div>
              <div>
                <label htmlFor={`output-${index}`} className="block text-sm font-medium text-black">Test Case Output (comma separated)</label>
                <input
                  type="text"
                  id={`output-${index}`}
                  name="output"
                  value={testCase.output}
                  onChange={(e) => handleTestCaseChange(e, index, 'output')}
                  placeholder="Test Case Output"
                  className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded mt-4 hover:bg-gradient-to-l transition-colors duration-300"
        >
          Add Problem
        </button>
      </form>
    </div>
  );
}
