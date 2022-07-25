import React, { useState, useEffect, useRef } from 'react';

import { createRoot } from 'react-dom/client';

import { MindmapComponent, InspectorComponent } from "@jsplumb-components/mindmap-react"

function DemoComponent(props) {

    const mindmap = useRef(null)

    useEffect(() => {
        mindmap.current.loadUrl('./example-mindmap.json', () => {
            mindmap.current.zoomToFit()
        })
    }, [])

    function undo() {
        mindmap.current.undo()
    }

    function redo() {
        mindmap.current.redo()
    }

    return <>
        <div className="container">
            <MindmapComponent ref={mindmap} id="myMindmap"/>
            <div className="rhs">
                <div id="undoredo">
                    <button onClick={() => undo()}>Undo</button>
                    <button onClick={() => redo()}>Redo</button>
                </div>
                <InspectorComponent mindmapId="myMindmap"/>
            </div>
        </div>
        </>
}

const c = createRoot(document.querySelector("#main"))
c.render(<DemoComponent/>)
