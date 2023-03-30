
type Props = {
  icon: string
}

const SidenavIcon = ({icon}: Props) => {
  return ( 
    <div>
      {
        icon === 'home' ? 
        <svg width="24" height="21" viewBox="0 0 24 21">
          <use xlinkHref="/sprite.svg#home-icon" />
        </svg> : 
        icon === 'puns' ?
        <svg width="24" height="20" viewBox="0 0 24 20">
          <use xlinkHref="/sprite.svg#puns-icon" />
        </svg> : 
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlinkHref="/sprite.svg#polls-icon" />
        </svg>
      }
    </div>
   );
}
 
export default SidenavIcon;