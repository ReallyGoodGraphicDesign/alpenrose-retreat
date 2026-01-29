import SectionModal from "./SectionModal";
import "./Main.css";
import { useEffect, useState } from "react";

function Main() {
const [activeSection, setActiveSection] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbwHj5C9YjvfjzYzp7Fu0qzKDB2ED1EYlDG89_3ZloCsj3f624o4EoQ504UPfOX2iBkJIg/exec")
      .then((res) => res.json())

      .then(rows => {
        const normalized = Object.fromEntries(
          rows.map(row => [row.section_id, row])
        );
        setContent(normalized);
      })
      .catch(err => console.error(err));
  }, []);

  if (!content) return null; // or a loading state

  return (
        <>
    <div className="main">
{content.alpenrose?.enabled && (
  <div className="text-panel text-panel-alpenrose" id="alpenrose">
    <h2 className="section-title">{content.alpenrose.title}</h2>
    <p className="section-text">{content.alpenrose.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("alpenrose");
        }}
        >
        <p className="learn-more">
        {content.alpenrose.cta_label || "Learn More"}
        </p>
        </button>
  </div>
)}

      <div className="image-panel panel-17"><p>17</p></div>
      <div className="image-panel panel-5"><p>5</p></div>
      <div className="image-panel panel-21"><p>21</p></div>
      <div className="image-panel panel-10"><p>10</p></div>




{content.retreat?.enabled && (
  <div className="text-panel text-panel-retreat" id="retreat">
    <h2 className="section-title">{content.retreat.title}</h2>
    <p className="section-text">{content.retreat.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("retreat");
        }}
        >
        <p className="learn-more">
        {content.retreat.cta_label || "Learn More"}
        </p>
        </button>
  </div>
)}




      <div className="image-panel panel-7"><p>7</p></div>
      <div className="image-panel panel-31"><p>31</p></div>
      <div className="image-panel panel-18"><p>18</p></div>





{content.journey?.enabled && (
  <div className="text-panel text-panel-journey" id="journey">
    <h2 className="section-title">{content.journey.title}</h2>
    <p className="section-text">{content.journey.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("journey");
        }}
        >
        <p className="learn-more">
        {content.journey.cta_label || "Learn More"}
        </p>
        </button>

  </div>
)}





      <div className="image-panel panel-2"><p>2</p></div>
      <div className="image-panel panel-4"><p>4</p></div>
      <div className="image-panel panel-8"><p>8</p></div>
      <div className="image-panel panel-30"><p>30</p></div>
      <div className="image-panel panel-23"><p>23</p></div>





{content.investment?.enabled && (
  <div className="text-panel text-panel-investment" id="investment">
    <h2 className="section-title">{content.investment.title}</h2>
    <p className="section-text">{content.investment.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("investment");
        }}
        >
        <p className="learn-more">
        {content.investment.cta_label || "Learn More"}
        </p>
        </button>
  </div>
)}





      <div className="image-panel panel-33"><p>33</p></div>
      <div className="image-panel panel-25"><p>25</p></div>
      <div className="image-panel panel-27"><p>27</p></div>





{content.accommodations?.enabled && (
  <div className="text-panel text-panel-accommodations" id="accommodations">
    <h2 className="section-title">{content.accommodations.title}</h2>
    <p className="section-text">{content.accommodations.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("accommodations");
        }}
        >
        <p className="learn-more">
        {content.accommodations.cta_label || "Learn More"}
        </p>
        </button>
  </div>
)}






      <div className="image-panel panel-9"><p>9</p></div>
      <div className="image-panel panel-20"><p>20</p></div>
      <div className="image-panel panel-28"><p>28</p></div>
      <div className="image-panel panel-6"><p>6</p></div>
      <div className="image-panel panel-34"><p>34</p></div>






{content.our_story?.enabled && (
  <div className="text-panel text-panel-our_story" id="our_story">
    <h2 className="section-title">{content.our_story.title}</h2>
    <p className="section-text">{content.our_story.text}</p>
        <button
        className="cta"
        onClick={(e) => {
        if (e.detail !== 0) { // mouse click, not keyboard
        e.currentTarget.blur();
        }
        setActiveSection("our_story");
        }}
        >
        <p className="learn-more">
        {content.our_story.cta_label || "Learn More"}
        </p>
        </button>
  </div>
)}


        <div className="image-panel panel-29"><p>29</p></div>
        <div className="image-panel panel-16"><p>16</p></div>
        <div className="image-panel panel-26"><p>26</p></div>
        <div className="image-panel panel-1"><p>1</p></div>
        <div className="image-panel panel-3"><p>3</p></div>
        <div className="image-panel panel-14"><p>14</p></div>
        <div className="image-panel panel-19"><p>19</p></div>
        <div className="image-panel panel-13"><p>13</p></div>
        <div className="image-panel panel-11"><p>11</p></div>
        <div className="image-panel panel-15"><p>15</p></div>
        <div className="image-panel panel-32"><p>32</p></div>
        <div className="image-panel panel-24"><p>24</p></div>
        <div className="image-panel panel-12"><p>12</p></div>
        <div className="image-panel panel-22"><p>22</p></div>
        <div className="image-panel panel-35"><p>35</p></div>
</div>

{activeSection && (
  <SectionModal
    section={content[activeSection]}
    onClose={() => setActiveSection(null)}
  />
)}
</>
);
}

export default Main;
