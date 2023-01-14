import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Text, View } from 'react-native'
import { fetchingData, setToken } from '../store/slices/locationDataSlice'

export function Counter() {

  const count = useSelector(state => state.locationData.token)
  const dispatch = useDispatch()

  return (
    <View style={{backgroundColor: "#FFFFFF", flex:1}}>
      <View>
        <Button
          onPress={() => dispatch(setToken("Hi Hi"))}
          title={"Set"}

        >
          
        </Button>
        <Text style={{color: "#000000"}}>{count}</Text>
        <Button
          onPress={() => dispatch(fetchingData())}
          title={"set null"}
        >
        </Button>
      </View>
    </View>
  )
}