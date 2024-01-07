import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import characterFoto from "./charakter.png";
import { BiMusic, BiNoEntry } from "react-icons/bi";
import { IoMdMusicalNote } from "react-icons/io";
import {
  GiMusicalNotes,
  GiMusicSpell,
  GiMusicalKeyboard,
  GiLoveSong,
} from "react-icons/gi";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { BsMusicPlayer } from "react-icons/bs";
import { MdOutlineLibraryMusic } from "react-icons/md";
import {
  SiMusicbrainz,
  SiYoutubemusic,
  SiBeatport,
  SiBeatsbydre,
} from "react-icons/si";
import { FaHeartbeat } from "react-icons/fa";
import MusicComponent from "./MusicComponent";
import audio1 from "./audio/1.wav";
import audio2 from "./audio/2.wav";
import audio3 from "./audio/3.wav";
import audio4 from "./audio/4.wav";
import audio5 from "./audio/5.wav";
import audio6 from "./audio/chips1_feel_a.mp3";
import audio7 from "./audio/chips4_filback_a.mp3";
import audio8 from "./audio/drum1_kick_b.mp3";
import audio9 from "./audio/drum4_charley_a.mp3";
import audio10 from "./audio/drum5_chatom_a.mp3";
import audio11 from "./audio/effect1_bass_b.mp3";
import audio12 from "./audio/effect2_enigmatic_a.mp3";
import audio13 from "./audio/melo1_toun_b.mp3";
import audio14 from "./audio/melo2_flute_b.mp3";
// import audio1 from "./audio/new_mp3/mp3/chips1_feel_a.mp3";
// import audio2 from "./audio/new_mp3/mp3/chips1_feel_b.mp3";
// import audio3 from "./audio/new_mp3/mp3/chips2_chillin_a.mp3";
// import audio4 from "./audio/new_mp3/mp3/chips3_yeah_a.mp3";
// import audio5 from "./audio/new_mp3/mp3/chips4_filback_a.mp3";
// import audio6 from "./audio/new_mp3/mp3/chips4_filback_b.mp3";
// import audio7 from "./audio/new_mp3/mp3/chips5_teylo_a.mp3";
// import audio8 from "./audio/new_mp3/mp3/drum1_kick_a.mp3";
// import audio9 from "./audio/new_mp3/mp3/drum1_kick_b.mp3";
// import audio10 from "./audio/new_mp3/mp3/drum2_snare_a.mp3";
// import audio11 from "./audio/new_mp3/mp3/drum2_snare_b.mp3";
// import audio12 from "./audio/new_mp3/mp3/drum3_touti_a.mp3";
// import audio13 from "./audio/new_mp3/mp3/drum4_charley_a.mp3";
// import audio14 from "./audio/new_mp3/mp3/drum5_chatom_a.mp3";
import Countdown360 from "react-countdown360";

const items = [
  {
    id: v4(),
    name: "music1",
    url: audio1,
    icon: <BiMusic />,
  },
  {
    id: v4(),
    name: "music2",
    url: audio2,
    icon: <IoMdMusicalNote />,
  },
  {
    id: v4(),
    name: "music3",
    url: audio3,
    icon: <GiMusicalNotes />,
  },
  {
    id: v4(),
    name: "music4",
    url: audio4,
    icon: <GiMusicSpell />,
  },
  {
    id: v4(),
    name: "music5",
    url: audio5,
    icon: <RiNeteaseCloudMusicFill />,
  },
  {
    id: v4(),
    name: "music6",
    url: audio6,
    icon: <BsMusicPlayer />,
  },
  {
    id: v4(),
    name: "music7",
    url: audio7,
    icon: <GiMusicalKeyboard />,
  },
  {
    id: v4(),
    name: "music8",
    url: audio8,
    icon: <MdOutlineLibraryMusic />,
  },
  {
    id: v4(),
    name: "music9",
    url: audio9,
    icon: <SiMusicbrainz />,
  },
  {
    id: v4(),
    name: "music10",
    url: audio10,
    icon: <SiYoutubemusic />,
  },
  {
    id: v4(),
    name: "music11",
    url: audio11,
    icon: <SiBeatport />,
  },
  {
    id: v4(),
    name: "music12",
    url: audio12,
    icon: <SiBeatsbydre />,
  },
  {
    id: v4(),
    name: "music13",
    url: audio13,
    icon: <FaHeartbeat />,
  },
  {
    id: v4(),
    name: "music14",
    url: audio14,
    icon: <GiLoveSong />,
  },
];

function App() {
  const [seconds, setSeconds] = useState(10000);
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState({
    character1: {
      title: "Mike",
      items: [],
    },
    character2: {
      title: "Nicky",
      items: [],
    },
    character3: {
      title: "Alex",
      items: [],
    },
    character4: {
      title: "John",
      items: [],
    },
    character5: {
      title: "Tom",
      items: [],
    },
    character6: {
      title: "Jerry",
      items: [],
    },
    character7: {
      title: "Tony",
      items: [],
    },
    provider: {
      title: "provider",
      items: items,
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  const setCloseTimerState = (closeTimerState) => {
    let countLeftChar = [];
    let countLeftCharKey = [];
    for (let key in closeTimerState) {
      countLeftCharKey.push(key);
    }
    for (let i = 0; i < 7; i++) {
      countLeftChar.push(closeTimerState[countLeftCharKey[i]]);
    }
    console.log(countLeftChar);
    let check = countLeftChar.some((item) => item.items[0]);
    if (!check) {
      setSeconds(10000);
      setIsActive(false);
    }
    console.log(seconds);
  };

  let progressConfig = {
    // containerStyle: {},
    // progressStyle: {},
    stripe: false,
    animate: false,
    showLabel: true,
    width: "100px",
    height: "5px",
    // label: 40 + "%",
  };

  return (
    <div className="App">
      <div className="header">incredibox</div>
      <MusicComponent
        isActive={isActive}
        setIsActive={setIsActive}
        seconds={seconds}
        setSeconds={setSeconds}
        setCloseTimerState={setCloseTimerState}
        state={state}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="column-cont">
          {_.map(state, (data, key) => {
            return (
              <div
                key={key}
                className={data.title === "provider" ? "column qqq" : "column"}
              >
                {data.items.length > 0 ? (
                  <>
                    {data.title !== "provider" ? (
                      <div className={"droppable-col"}>
                        {/* {data.items.map((el, index) => { */}
                        {/* return ( */}
                        {/* <div key={index} className={`itemChar`}> */}
                        {/* {el.name} */}
                        {/* </div> */}
                        {/* ); */}
                        {/* })} */}
                        <div className="awake-character">
                          <img className="imgChar" src={characterFoto} alt="" />
                        </div>
                        <span className="close-character">
                          <span>{data.title}</span>
                          <span
                            className="spanX"
                            onClick={(e) => {
                              let findData;
                              for (let key in state) {
                                if (state[key].title === data.title) {
                                  findData = state[key];
                                }
                              }
                              let filterState = {};
                              for (let key2 in state) {
                                if (state[key2].title !== data.title) {
                                  filterState[key2] = state[key2];
                                }
                                if (state[key2].title === data.title) {
                                  filterState[key2] = findData;
                                }
                                if (state[key2].title === "provider") {
                                  filterState[key2].items.push(
                                    findData.items[0]
                                  );
                                }
                              }
                              findData.items = [];
                              setState(filterState);
                              setCloseTimerState(state);
                            }}
                          >
                            <Countdown360
                              borderWidth="2"
                              width="25"
                              fontSize="12px"
                              unitFormatter={(seconds) =>
                                seconds === 1 ? "" : ""
                              }
                              timeFormatter={(seconds) =>
                                seconds === 1 ? "✖" : "✖"
                              }
                              backgroundColor="#5c5c5c"
                              fontColor="#ffffff"
                              fontFamily="monospace"
                              // fontSize={20}
                              fontWeight={400}
                              seconds={seconds / 1000}
                              borderFillColor="#ffffff"
                              borderUnfillColor="#5c5c5c"
                              smooth
                              clockwise="false"
                            />
                          </span>
                        </span>
                      </div>
                    ) : (
                      <Droppable droppableId={key}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={"droppable-col"}
                            >
                              {data.items.map((el, index) => {
                                return (
                                  <Draggable
                                    key={el.id}
                                    index={index}
                                    draggableId={el.id}
                                  >
                                    {(provided, snapshot) => {
                                      // console.log(snapshot);
                                      return (
                                        <div
                                          className={`item ${
                                            snapshot.isDragging && "dragging"
                                          }`}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          {el.icon}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    )}
                  </>
                ) : (
                  <Droppable droppableId={key}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={"droppable-col"}
                        >
                          <div className="sleep-character">
                            <img
                              className="imgChar"
                              src={characterFoto}
                              alt=""
                            />
                          </div>

                          {data.items.map((el, index) => {
                            return (
                              <Draggable
                                key={el.id}
                                index={index}
                                draggableId={el.id}
                              >
                                {(provided, snapshot) => {
                                  // console.log(snapshot);
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    ></div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                )}
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
