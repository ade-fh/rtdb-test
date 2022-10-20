import { useEffect } from 'react';
import { rtdb } from '../common/firebase';
import { ref, onValue } from 'firebase/database';

export default function Palang() {
  useEffect(() => {
    const state_palang_ref = ref(rtdb, 'state_palang/');
    const unsubscribe = onValue(state_palang_ref, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
    return () => unsubscribe();
  }, []);
  return <></>;
}
