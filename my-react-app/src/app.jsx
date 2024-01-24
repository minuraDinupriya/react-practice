import { Student } from "./Student";


export function App() {
    return(
        <>
            <Student name="Bob" age={30} isStudent={true}/>
            <Student name="Patrick" age={42} isStudent={false}/>
        </>
    );
}
