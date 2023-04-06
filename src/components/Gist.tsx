import {hotPuns} from "../data";


const Gist = () => {

  const puns = hotPuns
  return ( 
    <main>
       <div className="mt-5">
        {
          puns.map(pun => (
            <div key={pun.id}>
              <h3 className="capitalize text-[#070808] font-bold py-3">
                {pun.name}
              </h3>
              <p className="text-[14px] font-normal py-3">{pun.pun}</p>
              <div className="py-5 divide px-1 flex items-center gap-5">
              <svg width="24" height="24" className="text-text" viewBox="0 0 24 24">
                <use xlinkHref="/sprite.svg#polls-icon" />
              </svg>
                <p>{pun.reaction} <span className="text-text">Reactions</span></p>
                <p>{pun.comments} <span className="text-text">Comments</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
   );
}
 
export default Gist;