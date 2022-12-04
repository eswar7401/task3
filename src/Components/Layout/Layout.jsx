import React from 'react';



class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='text-wrap' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img alt=" " src='https://opentdb.com/images/logo.png' />
                <p className='text-bold'>
                    Free to use, user-contributed trivia question database.
                    4,072 VERIFIED QUESTIONS AND 9,562 PENDING QUESTIONS
                </p>
                <br />
                <div className='d-flex text-nowrap'>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        );
    }
}

export default Layout;