'use client'

import { useFormStatus} from 'react-dom';

function MealsFormSubmit() {
    const { pending } = useFormStatus();

  return (
    <button>{ pending ? 'Submiting...' : 'Share Meal'}</button>
  )
}

export default MealsFormSubmit
