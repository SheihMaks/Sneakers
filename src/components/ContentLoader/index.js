import ContentLoader from 'react-content-loader';

export const CardLayout = () => {
    return(<ContentLoader 
    speed={0}
    width={150}
    height={260}
    viewBox="0 0 150 260"
    backgroundColor="#ffffff"
    foregroundColor="#f2f2f2"
    >
    <rect x="30" y="145" rx="3" ry="3" width="150" height="15" /> 
    <rect x="30" y="165" rx="3" ry="3" width="95" height="15" /> 
    <rect x="30" y="200" rx="8" ry="8" width="80" height="25" /> 
    <rect x="150" y="193" rx="8" ry="8" width="32" height="32" /> 
    <rect x="30" y="35" rx="0" ry="0" width="150" height="90" />
    </ContentLoader>)}