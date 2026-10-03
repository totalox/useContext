import ComponentB from "./ComponentB.tsx";
export default function ComponentA() {
    return(
        <>
        <div className="div">
            Component A
            <ComponentB />
        </div>
        </>
    )
}