// Step 11: Main React Application Component (App.jsx)
// Import custom external CSS stylesheet for styling layout and design
import './App.css';

/**
 * App Component: Demonstrates fundamental React JSX features including:
 * 1. JSX Elements & Attributes
 * 2. JavaScript Expressions inside JSX ({})
 * 3. Rendering JavaScript Objects
 * 4. Rendering Arrays of Objects using map()
 * 5. Inline CSS & Conditional Styling using Ternary Operator
 */
function App() {
  // Step 5: Single Office Object Definition
  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Step 6: Array of Multiple Office Objects
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 65000,
      Address: "Hyderabad"
    },
    {
      Name: "WeWork",
      Rent: 80000,
      Address: "Bangalore"
    },
    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Pune"
    }
  ];

  return (
    <div className="app-container">
      {/* Step 3: Heading Requirement */}
      {/* Display exact heading using JSX elements */}
      <h1 className="main-heading">Office Space, at Affordable Range</h1>

      {/* Step 4: Office Image Requirement */}
      {/* Display image from public folder using JSX attributes (src, alt, width, height) */}
      <div className="image-wrapper">
        <img
          src="/office.jpg"
          alt="Modern Office Space"
          className="office-banner-img"
        />
      </div>

      {/* Section 1: Single Office Object Demonstration (Step 5 & Step 7) */}
      <section className="section-container">
        <h2 className="section-title">Single Office Details (Object Rendering)</h2>
        <div className="office-card single-card">
          {/* Step 9: JSX Expressions & Object Property Rendering */}
          <h3>Name: {office.Name}</h3>
          
          {/* Step 7: Conditional Inline Styling */}
          {/* If Rent <= 60000 display in Red, otherwise Green */}
          <p className="rent-text">
            Rent:{" "}
            <span
              style={{
                color: office.Rent <= 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rs.{office.Rent}
            </span>
          </p>
          
          <p className="address-text">Address: {office.Address}</p>
        </div>
      </section>

      {/* Section 2: Multiple Office Objects Array Mapping (Step 6 & Step 7) */}
      <section className="section-container">
        <h2 className="section-title">Available Office Spaces (Array Rendering)</h2>
        <div className="office-grid">
          {/* Step 6 & Step 9: Array Rendering using JavaScript map() function */}
          {officeSpaces.map((item, index) => (
            <div key={index} className="office-card">
              {/* Rendering Object Properties dynamically */}
              <h3>Name: {item.Name}</h3>

              {/* Step 7: Conditional Inline Styling applied to each office card */}
              <p className="rent-text">
                Rent:{" "}
                <span
                  style={{
                    color: item.Rent <= 60000 ? "red" : "green",
                    fontWeight: "bold"
                  }}
                >
                  Rs.{item.Rent}
                </span>
              </p>

              <p className="address-text">Address: {item.Address}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
