import UserProfile from './components/UserProfile';

export default function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="John Doe" 
        age="30" 
        bio="Enjoys coding, traveling, and coffee" 
      />
    </div>
  );
}
