"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var styled_components_1 = require("styled-components");
var array_1 = require("./util/array");
var gridEncoding_1 = require("./util/gridEncoding");
var useInterval_1 = require("./util/useInterval");
var actions = require("./store/actions/session");
var DrawerToggle_1 = require("./components/MenuDrawer/DrawerToggle/DrawerToggle");
// import GameDescription from "./components/Game/GameDescription";
var GameInfo_1 = require("./components/Game/GameInfo");
var GameScreen_1 = require("./components/Game/GameScreen");
var HelpButton_1 = require("./components/HelpMenu/HelpButton");
var Header_1 = require("./components/Game/Header");
var Footer_1 = require("./components/Game/Footer");
var NextGridDialog_1 = require("./components/Game/NextGridDialog");
var SelectDifficultyModal_1 = require("./components/Game/SelectDifficultyModal");
var MenuDrawer_1 = require("./components/MenuDrawer/MenuDrawer");
var AppContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 300px;\n  text-align: center;\n  overflow: hidden;\n  background-color: rgba(247, 255, 249);\n  font-family: sans-serif;\n  font-size: 14px;\n"], ["\n  min-width: 300px;\n  text-align: center;\n  overflow: hidden;\n  background-color: rgba(247, 255, 249);\n  font-family: sans-serif;\n  font-size: 14px;\n"])));
function App(props) {
    // State
    var _a = react_1.useState({
        matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        target: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        gameId: "",
        isSolved: null,
        moveCount: 0,
    }), game = _a[0], setGame = _a[1];
    var gameRef = react_1.useRef(game);
    var _b = react_1.useState(false), showSideDrawer = _b[0], setShowSideDrawer = _b[1];
    var _c = react_1.useState({
        isAutoplay: false,
        isStart: true,
        showMenu: false,
        difficulty: "normal",
        resetDelay: 500,
        isFirstLoad: true,
    }), gameSettings = _c[0], setGameSettings = _c[1];
    var _d = react_1.useState(""), movement = _d[0], setMovement = _d[1];
    // Effects
    useInterval_1.default(function () {
        if (gameSettings.isAutoplay) {
            if (!game.isSolved) {
                randomize();
            }
            else {
                setGameSettings(__assign(__assign({}, gameSettings), { isAutoplay: false }));
            }
        }
    });
    // Keyhandlers
    var handleKeyDown = function (e) {
        if (gameRef.current.isSolved) {
            return;
        }
        if (e.key === "w" || e.key === "W" || e.keyCode === 38) {
            slide("moveUp", true);
        }
        if (e.key === "s" || e.key === "S" || e.keyCode === 40)
            slide("moveDown", true);
        if (e.key === "a" || e.key === "A" || e.keyCode === 37)
            slide("moveLeft", true);
        if (e.key === "d" || e.key === "D" || e.keyCode === 39)
            slide("moveRight", true);
        if (e.key === "q" || e.key === "Q" || e.keyCode === 33)
            slide("rotateLeft", true);
        if (e.key === "e" || e.key === "E" || e.keyCode === 34)
            slide("rotateRight", true);
    };
    react_1.useEffect(function () {
        window.addEventListener("keydown", handleKeyDown);
        return function () {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });
    // Function Declarations
    function newGame(difficulty) {
        var numberColors = 1;
        var numberSquaresMax = 4;
        if (difficulty === "hard") {
            numberColors = 2;
            numberSquaresMax = 5;
        }
        var numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;
        var randomColor;
        var numSquares = 0;
        var newMatrix = [];
        for (var i = 0; i < 9; i++) {
            if (numSquares < numSquaresMax) {
                randomColor = Math.floor(Math.random() * numberColors);
                if (i < 2 && numberColors > 1) {
                    if (i === 0) {
                        randomColor = 0;
                    }
                    if (i === 1) {
                        randomColor = 1;
                    }
                }
                switch (randomColor) {
                    case 0:
                        newMatrix.push(1);
                        break;
                    case 1:
                        newMatrix.push(2);
                        break;
                    case 2:
                        newMatrix.push(3);
                        break;
                    default:
                        newMatrix.push(0);
                        break;
                }
                numSquares += 1;
            }
            else {
                newMatrix.push(0);
            }
        }
        var updatedMatrix = array_1.shuffle(newMatrix);
        var updatedTarget = array_1.shuffle(newMatrix);
        if (array_1.arrayEquals(updatedMatrix, updatedTarget)) {
            while (array_1.arrayEquals(updatedMatrix, updatedTarget)) {
                updatedTarget = array_1.shuffle(newMatrix);
            }
        }
        var newGame = {
            matrix: updatedMatrix,
            target: updatedTarget,
            gameId: gridEncoding_1.encodeGame(updatedMatrix, updatedTarget),
            isSolved: false,
            moveCount: 0,
        };
        setGame(newGame);
        gameRef.current = newGame;
    }
    function slide(moveType, referenceMatrix) {
        if (referenceMatrix === void 0) { referenceMatrix = false; }
        var matrix = referenceMatrix ? gameRef.current.matrix : game.matrix;
        matrix = array_1.rearrangeMatrix(matrix, moveType);
        updateMatrix(matrix, true);
        setMovement(moveType);
        setTimeout(function () { return setMovement(""); }, 500);
    }
    function updateMatrix(updatedMatrix, useGameRef) {
        if (useGameRef === void 0) { useGameRef = false; }
        var newMoveCount = game.moveCount + 1;
        var isSolved = false;
        var prevGame = game;
        var target = game.target;
        if (useGameRef) {
            newMoveCount = gameRef.current.moveCount + 1;
            prevGame = gameRef.current;
            target = gameRef.current.target;
        }
        if (array_1.arrayEquals(updatedMatrix, target)) {
            isSolved = true;
            if (gameSettings.isAutoplay) {
                props.incrementSkipped();
            }
            else {
                props.incrementSolved();
            }
        }
        var updatedGame = __assign(__assign({}, prevGame), { matrix: updatedMatrix, isSolved: isSolved, moveCount: newMoveCount });
        setGame(updatedGame);
        gameRef.current = updatedGame;
    }
    function randomize() {
        var option = Math.floor(Math.random() * 5);
        switch (option) {
            case 0:
                slide("rotateLeft");
                break;
            case 1:
                slide("rotateRight");
                break;
            case 2:
                slide("moveUp");
                break;
            case 3:
                slide("moveDown");
                break;
            case 4:
                slide("moveLeft");
                break;
            case 5:
                slide("moveRight");
                break;
            default:
                break;
        }
    }
    function toggleAutoplay() {
        var isAutoplay = !gameSettings.isAutoplay;
        setGameSettings(__assign(__assign({}, gameSettings), { isAutoplay: isAutoplay }));
    }
    function startGameHandler(difficulty) {
        props.initializeSession();
        props.setDifficulty(difficulty);
        setGameSettings(__assign({}, gameSettings));
        newGame(difficulty);
        toggleStart();
        setShowSideDrawer(false);
    }
    function toggleStart() {
        var isStart = !gameSettings.isStart;
        setGameSettings(__assign(__assign({}, gameSettings), { isStart: isStart }));
    }
    return (<AppContainer>
      <SelectDifficultyModal_1.default show={gameSettings.isStart} modalClosed={toggleStart} startGameHandler={startGameHandler} toggleStart={toggleStart}/>
      <MenuDrawer_1.default open={showSideDrawer} click={function () { return setShowSideDrawer(!showSideDrawer); }} clickNewGame={toggleStart} clickSkip={function () {
            props.incrementSkipped();
            newGame(props.difficulty);
        }} clickAutosolve={toggleAutoplay} isAutoplay={gameSettings.isAutoplay}/>
      <DrawerToggle_1.default showSideDrawer={showSideDrawer} click={function () { return setShowSideDrawer(!showSideDrawer); }}/>
      <Header_1.default />
      <GameScreen_1.default isSolved={game.isSolved} matrix={game.matrix} movement={movement} slide={slide}/>
      <NextGridDialog_1.default isSolved={game.isSolved} difficulty={props.difficulty} newGame={newGame}/>
      <GameInfo_1.default numberSolved={props.numberSolved} numberSkipped={props.numberSkipped} moveCount={game.moveCount} targetGrid={gameRef.current.target}/>
      <HelpButton_1.default />
      <Footer_1.default />
    </AppContainer>);
}
var mapStateToProps = function (state) {
    return {
        numberSolved: state.session.numberSolved,
        numberSkipped: state.session.numberSkipped,
        difficulty: state.session.difficulty,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setDifficulty: function (difficulty) { return dispatch(actions.setDifficulty(difficulty)); },
        incrementSkipped: function () { return dispatch(actions.incrementSkipped()); },
        incrementSolved: function () { return dispatch(actions.incrementSolved()); },
        initializeSession: function () { return dispatch(actions.initializeSession()); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
var templateObject_1;
