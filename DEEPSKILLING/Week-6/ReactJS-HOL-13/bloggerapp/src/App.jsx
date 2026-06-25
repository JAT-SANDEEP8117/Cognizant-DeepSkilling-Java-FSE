import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  // State for Conditional Rendering Demonstrations
  const [showBooks, setShowBooks] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showIfElse, setShowIfElse] = useState(true);
  const [activeDemo, setActiveDemo] = useState('all');

  // Method 1: Using if...else logic to determine component output
  const renderIfElseSection = () => {
    if (showIfElse) {
      return (
        <div className="demo-box">
          <h4>Method 1: if...else (Active)</h4>
          <BookDetails />
        </div>
      );
    } else {
      return (
        <div className="demo-box disabled">
          <h4>Method 1: if...else (Hidden)</h4>
          <p>Book details hidden using if...else statement.</p>
        </div>
      );
    }
  };

  // Method 4: Using Element Variables
  let elementVariableContent;
  if (showBlogs) {
    elementVariableContent = <BlogDetails />;
  } else {
    elementVariableContent = (
      <div className="demo-box disabled">
        <p>Blog details stored as element variable is currently null/hidden.</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="app-header">
        <h1>BloggerApp Dashboard</h1>
        <p className="subtitle">
          Demonstrating React Functional Components, JSX, Lists & Keys, map(), and Conditional Rendering
        </p>
      </header>

      {/* Main 3-Column Layout as requested in Step 7 & 8 */}
      <section className="main-layout-section">
        <div className="three-column-container">
          {/* Column 1: Course Details */}
          <div className="column course-col">
            <CourseDetails />
          </div>

          {/* Green Vertical Divider 1 */}
          <div className="green-separator"></div>

          {/* Column 2: Book Details */}
          <div className="column book-col">
            <BookDetails />
          </div>

          {/* Green Vertical Divider 2 */}
          <div className="green-separator"></div>

          {/* Column 3: Blog Details */}
          <div className="column blog-col">
            <BlogDetails />
          </div>
        </div>
      </section>

      {/* Interactive Conditional Rendering Demonstrations Section (Step 6) */}
      <section className="conditional-demo-section">
        <h2>Step 6: Conditional Rendering Methods Showcase</h2>

        {/* Controls to toggle states */}
        <div className="demo-controls">
          <button 
            className={`control-btn ${showIfElse ? 'active' : ''}`}
            onClick={() => setShowIfElse(!showIfElse)}
          >
            Toggle Method 1 (if...else): {showIfElse ? 'ON' : 'OFF'}
          </button>

          <button 
            className={`control-btn ${isLoggedIn ? 'active' : ''}`}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            Toggle Method 2 (Ternary LoggedIn): {isLoggedIn ? 'User' : 'Guest'}
          </button>

          <button 
            className={`control-btn ${showBooks ? 'active' : ''}`}
            onClick={() => setShowBooks(!showBooks)}
          >
            Toggle Method 3 (&& Operator): {showBooks ? 'SHOW' : 'HIDE'}
          </button>

          <button 
            className={`control-btn ${showBlogs ? 'active' : ''}`}
            onClick={() => setShowBlogs(!showBlogs)}
          >
            Toggle Method 4 (Element Variable): {showBlogs ? 'SHOW' : 'HIDE'}
          </button>

          <button 
            className={`control-btn ${showCourses ? 'active' : ''}`}
            onClick={() => setShowCourses(!showCourses)}
          >
            Toggle Method 5 (Ternary Component/null): {showCourses ? 'SHOW' : 'HIDE'}
          </button>
        </div>

        <div className="demo-grid">
          {/* Method 1 Example: if...else */}
          <div className="demo-card">
            <h3>Method 1: if...else</h3>
            {renderIfElseSection()}
          </div>

          {/* Method 2 Example: Ternary Operator */}
          <div className="demo-card">
            <h3>Method 2: Ternary Operator</h3>
            <div className="demo-box">
              {isLoggedIn ? (
                <div className="status-badge success">
                  <span>Logged In View</span>
                  <p>Welcome! You are viewing content as an Authenticated User.</p>
                </div>
              ) : (
                <div className="status-badge warning">
                  <span>Logged Out View</span>
                  <p>Please log in to view premium features.</p>
                </div>
              )}
            </div>
          </div>

          {/* Method 3 Example: Short-circuit && Operator */}
          <div className="demo-card">
            <h3>Method 3: Short-Circuit (&&)</h3>
            <div className="demo-box">
              {showBooks && <BookDetails />}
              {!showBooks && <p className="placeholder">showBooks is false: Component not rendered via &&</p>}
            </div>
          </div>

          {/* Method 4 Example: Element Variables */}
          <div className="demo-card">
            <h3>Method 4: Element Variables</h3>
            <div className="demo-box">
              {elementVariableContent}
            </div>
          </div>

          {/* Method 5 Example: Conditional Components (Ternary with null) */}
          <div className="demo-card">
            <h3>Method 5: Conditional Components (Ternary : null)</h3>
            <div className="demo-box">
              {showCourses ? <CourseDetails /> : null}
              {!showCourses && <p className="placeholder">Component returned null when showCourses is false.</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
