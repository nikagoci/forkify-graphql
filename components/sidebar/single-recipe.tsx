import Image from "next/image"

interface Props {
    recipe: Recipe
}

const SingleRecipe = ({recipe}: Props) => {
  return (
    <div className="flex items-center justify-center w-full py-2 transition duration-200 cursor-pointer hover:-translate-y-2 hover:bg-gray gap-x-4">
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            className="w-16 h-16 rounded-full"
            width={64}
            height={64}
          />
          <div>
            <h3 className="w-40 font-normal capitalize truncate text-orange">{recipe.title}</h3>
            <h3 className="text-sm text-brown">{recipe.publisher}</h3>
          </div>
        </div>
  )
}

export default SingleRecipe