import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isShowMore, setIsShowMore] = useState(false);

const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut viverra tellus, sit amet sagittis libero. Integer nibh tortor, facilisis vel mollis dapibus, mattis ut nisl. Praesent convallis consequat eros, at interdum lorem lacinia eget. Praesent posuere leo nec tempor pretium. Quisque imperdiet semper ex, in maximus urna porttitor laoreet. Curabitur hendrerit est eget ante pulvinar tristique. Nullam vulputate, nulla vel posuere ullamcorper, mauris leo molestie tellus, a volutpat orci velit eu justo. Curabitur erat lectus, luctus non mauris ut, ultricies ornare diam. Praesent iaculis sapien nec blandit tempus. Praesent vitae gravida nisi. Donec consequat interdum elementum. Donec nec lacus mi. Fusce posuere cursus augue, sit amet vulputate eros dapibus ac. Nulla consequat massa massa, vel hendrerit nunc mattis ut. Morbi lobortis tristique tincidunt. Nulla facilisi"

  return (
    <div>
      <header>
            <p>
                {isShowMore ? data : data.slice(0, 160)}
                
                &nbsp;&nbsp;  
                
                <button onClick={(e) => setIsShowMore(!isShowMore)}>
                   {isShowMore ? 'see less' : 'see more...'}
                </button>

            </p> 
            
          
      </header>
    </div>
  );
}

export default App;
