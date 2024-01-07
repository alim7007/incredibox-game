import React, { useEffect, useState } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Countdown360 from "react-countdown360";

const MusicComponent = ({
  state,
  seconds,
  setSeconds,
  isActive,
  setIsActive,
}) => {
  const [character1, setCharacter1] = useState(false);
  const [character2, setCharacter2] = useState(false);
  const [character3, setCharacter3] = useState(false);
  const [character4, setCharacter4] = useState(false);
  const [character5, setCharacter5] = useState(false);
  const [character6, setCharacter6] = useState(false);
  const [character7, setCharacter7] = useState(false);

  useEffect(() => {
    if (state.character1.items.length > 0) {
      //   console.log(state.character1.items[0]);
      setCharacter1(state.character1.items[0]);
    } else {
      setCharacter1(false);
    }
    if (state.character2.items.length > 0) {
      //   console.log(state.character2.items[0]);
      setCharacter2(state.character2.items[0]);
    } else {
      setCharacter2(false);
    }
    if (state.character3.items.length > 0) {
      //   console.log(state.character3.items[0]);
      setCharacter3(state.character3.items[0]);
    } else {
      setCharacter3(false);
    }
    if (state.character4.items.length > 0) {
      //   console.log(state.character4.items[0]);
      setCharacter4(state.character4.items[0]);
    } else {
      setCharacter4(false);
    }
    if (state.character5.items.length > 0) {
      //   console.log(state.character5.items[0]);
      setCharacter5(state.character5.items[0]);
    } else {
      setCharacter5(false);
    }
    if (state.character6.items.length > 0) {
      //   console.log(state.character6.items[0]);
      setCharacter6(state.character6.items[0]);
    } else {
      setCharacter6(false);
    }
    if (state.character7.items.length > 0) {
      //   console.log(state.character7.items[0]);
      setCharacter7(state.character7.items[0]);
    } else {
      setCharacter7(false);
    }
  }, [state]);

  useEffect(() => {
    if (character1) {
      audioStart("1");
      //console.log(character1);
    }
  }, [character1]);

  useEffect(() => {
    if (character2) {
      audioStart("2");
      //console.log(character2);
    }
  }, [character2]);

  useEffect(() => {
    if (character3) {
      audioStart("3");
      //console.log(character3);
    }
  }, [character3]);

  useEffect(() => {
    if (character4) {
      audioStart("4");
      //console.log(character4);
    }
  }, [character4]);

  useEffect(() => {
    if (character5) {
      audioStart("5");
      //console.log(character5);
    }
  }, [character5]);

  useEffect(() => {
    if (character6) {
      audioStart("6");
      //console.log(character6);
    }
  }, [character6]);

  useEffect(() => {
    if (character7) {
      audioStart("7");
      //console.log(character7);
    }
  }, [character7]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (isActive && seconds < 1000) {
          setSeconds(10000);
        }
        setSeconds((seconds) => seconds - 1000);
      }, 1000);
    } else if (!isActive && seconds !== 10000) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, setSeconds, seconds]);

  const audioStart = (audioNum) => {
    if (isActive === false) {
      setIsActive(true);
      setSeconds(10000);
      let audioName = `audio` + audioNum;
      const aud = document.getElementsByClassName(`${audioName}`)[0];
      if (aud) {
        aud.onended = () => {
          aud.play();
        };
        aud.play();
      }
    } else {
      setTimeout(() => {
        let audioName = `audio` + audioNum;
        const aud = document.getElementsByClassName(`${audioName}`)[0];
        if (aud) {
          aud.onended = () => {
            aud.play();
          };
          aud.play();
        }
      }, [seconds]);
    }
  };
  // function toggle() {
  //   setIsActive(!isActive);
  // }

  return (
    <>
      <p className="timer_cont">{seconds / 1000}</p>
      {/* <div className="timer_cont"> */}
      {/* <CountdownCircleTimer
          isPlaying={isActive}
          duration={seconds / 1000}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
          size={75}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer> */}
      {/* </div> */}

      {character1 ? (
        <audio className="audio1">
          <source src={character1.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character2 ? (
        <audio className="audio2">
          <source src={character2.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character3 ? (
        <audio className="audio3">
          <source src={character3.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character4 ? (
        <audio className="audio4">
          <source src={character4.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character5 ? (
        <audio className="audio5">
          <source src={character5.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character6 ? (
        <audio className="audio6">
          <source src={character6.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
      {character7 ? (
        <audio className="audio7">
          <source src={character7.url} type="audio/mpeg"></source>
        </audio>
      ) : (
        ""
      )}
    </>
  );
};

export default MusicComponent;
