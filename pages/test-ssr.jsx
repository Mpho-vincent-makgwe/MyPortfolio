import React from "react";

export default function TestPage() {
    return (
        <div style={{ padding: "50px", textAlign: "center", color: "white", background: "#08001A", height: "100vh" }}>
            <h1>SSR Test Page</h1>
            <p>If you can see this, the global _app and _document are working.</p>
            <p>Current Time: {new Date().toISOString()}</p>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            test: true
        }
    };
}
