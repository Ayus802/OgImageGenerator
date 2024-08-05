import React from 'react';

const Documentation = () => {
  return (
    <div className="p-6  min-h-screen text-white ">
      <div className="max-w-4xl mx-auto bg-blue-900 p-8 shadow-md shadow-blue-500 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">OgImageGenerator Documentation</h1>
        <p className="mb-2">
          This documentation provides a concise overview of the <code>App</code> component's functionality in a React application, which allows users to input a title, content, and an image, then render these inputs onto a canvas. Users can generate a downloadable link for the canvas content and clear the inputs.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Overview</h2>
        <p className="mb-2">
          The system consists of a form where users can enter a title and content, upload an image, and then see these inputs rendered onto a canvas. Users can download the canvas content as an image or generate a link to view it.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Components and Hooks</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>State Variables:</strong>
            <ul className="list-disc pl-6">
              <li><code>title</code> (<code>useState</code>): Stores the title text input by the user.</li>
              <li><code>content</code> (<code>useState</code>): Stores the content text input by the user.</li>
              <li><code>img</code> (<code>useState</code>): Stores the image file uploaded by the user.</li>
              <li><code>link</code> (<code>useState</code>): Stores the generated link for the canvas image.</li>
            </ul>
          </li>
          <li><strong>References:</strong>
            <ul className="list-disc pl-6">
              <li><code>imgG</code> (<code>useRef</code>): Reference to the canvas DOM element.</li>
            </ul>
          </li>
          <li><strong>useEffect Hook:</strong>
            <p className="pl-6">Updates the canvas whenever <code>title</code>, <code>content</code>, or <code>img</code> changes. Draws the title and content text on the canvas. Draws the uploaded image on the canvas if present. Generates a downloadable link for the canvas content.</p>
          </li>
          <li><strong>Helper Functions:</strong>
            <ul className="list-disc pl-6">
              <li><code>Clear</code>: Reloads the page to reset all inputs and the canvas.</li>
              <li><code>LinkGenerate</code>: Generates a base64 URL for the current canvas content and updates the <code>link</code> state.</li>
              <li><code>HandleContent</code>: Ensures the content length does not exceed 65 characters by truncating and appending "..."</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">User Interface</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Navbar:</strong> A navigation bar rendered at the top.</li>
          <li><strong>Main Section:</strong> Contains the following:
            <ul className="list-disc pl-6">
              <li><strong>Input Forms:</strong>
                <ul className="list-disc pl-6">
                  <li>Title input field.</li>
                  <li>Content input field.</li>
                  <li>Image upload input.</li>
                </ul>
              </li>
              <li><strong>Buttons:</strong>
                <ul className="list-disc pl-6">
                  <li>Clear button: Resets all inputs.</li>
                  <li>Generate Link button: Creates a link to the canvas image.</li>
                  <li>Download button: Allows downloading the canvas content as an image file.</li>
                </ul>
              </li>
              <li><strong>Canvas:</strong> Displays the title, content, and uploaded image.</li>
              <li><strong>Documentation:</strong> Additional component rendered at the bottom.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Example Usage</h2>
        <p className="mb-2">
          <strong>Entering Inputs:</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>User inputs a title in the title field.</li>
          <li>User inputs content in the content field.</li>
          <li>User uploads an image file.</li>
        </ul>
        <p className="mb-2">
          <strong>Canvas Rendering:</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The title, content, and image are rendered onto the canvas.</li>
          <li>If the content exceeds 65 characters, it is truncated with "..."</li>
        </ul>
        <p className="mb-2">
          <strong>Generating and Downloading:</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>User can generate a link to view the canvas image.</li>
          <li>User can download the canvas content as an image file.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Summary</h2>
        <p>
          This React application enables users to input a title, content, and an image, which are rendered onto a canvas. The user can generate a downloadable link for the canvas content or clear the inputs. The application utilizes React hooks (<code>useState</code>, <code>useEffect</code>, <code>useRef</code>) to manage state and DOM references, ensuring that the canvas updates dynamically with the user inputs.
        </p>
      </div>
    </div>
  );
};

export default Documentation;
