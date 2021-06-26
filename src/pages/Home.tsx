import { useHistory } from 'react-router-dom'

import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'
//webpack (snowpack, vite, ...) handles imports
// Module Bundle -> webpack (gets the file extension) -> Render the JSX

export function Home() {
    const history = useHistory();

    function navigateToNewRoom() {
        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Illustration representing questions and answers" />
                <strong>Create live rooms of Q&amp;A</strong>
                <p>Answer questions from your audience in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Google's logo" />
                        Create your room with Google
                    </button>
                    <div className="separator">or enter a room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Type the code's room"
                        />
                        <Button type="submit">Enter room</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}