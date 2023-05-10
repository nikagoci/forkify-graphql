import {AiOutlineCheck} from 'react-icons/ai'


interface Props {
    ingredients: string[]
}

const RecipeIngredients = ({ingredients}: Props) => {
  return (
    <div className="py-8 bg-dark_gray">
        <h2 className="text-lg font-bold text-center text-orange">RECIPE INGREDIENTS</h2>
        <div className="grid grid-cols-2 mt-8 place-items-center">
            {ingredients.map((ingredient,index) => (
                <div className="flex items-center mb-3 gap-x-2" key={index}>
                    <AiOutlineCheck className='text-orange' size={17} />
                    <div className='text-sm w-fit'>{ingredient}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecipeIngredients