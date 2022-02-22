import {useRouter} from "next/router";

export default function ({item}) {

const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Подробная информация </h1>
            {item}

        </div>
    )
}
