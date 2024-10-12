import {useParams} from "react-router-dom";
import {useState} from "react";

export default function useMainParam() {
    const params = useParams()
    const [mainParam] = useState(params.id)
    return mainParam
}