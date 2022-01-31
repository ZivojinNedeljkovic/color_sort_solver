import { Button, Grid } from '@mui/material'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { Bottle } from '../../models/bottle'
import { removeFalsyValues } from '../../models/helpers'
import { setFiled } from '../../store/levelBuilderSlice'
import Bottles from '../bottles/Bottles'
import LevelBuilderSnackbar from './LevelBuilderSnackbar'
import Toolbar from './toolbar/Toolbar'

type LevelBuilderProps = {
  onSubmit: (level: Bottle[]) => void
}

function LevelBuilder({ onSubmit }: LevelBuilderProps) {
  const { bottles, maxNumberOfBottlesPerRow } = useAppSelector(
    store => store.levelBuilder
  )

  const dispatch = useAppDispatch()

  const onClickFieldHandler = (bottleId: number, fieldId: number) =>
    dispatch(
      setFiled({
        bottleIndex: bottleId,
        fieldIndex: fieldId,
      })
    )

  const onSubmitHandler = () => {
    // dispatch(validateBottles())

    // if (!submitError.message) return

    onSubmit(bottles.map(bottle => removeFalsyValues(bottle)))
  }

  return (
    <>
      <Grid container rowSpacing={5} justifyContent={'center'}>
        <Grid item md={12}>
          <Toolbar />
        </Grid>
        <Grid item xs={12} md={8} lg={5} xl={4}>
          <Bottles
            bottles={bottles}
            maxBottlesPerRow={maxNumberOfBottlesPerRow}
            onClickField={onClickFieldHandler}
            // invalidFields={submitError.invalidFields}
          />
        </Grid>
        <Grid item md={12}></Grid>
        <Grid item>
          <Button variant="contained" onClick={onSubmitHandler}>
            find solution
          </Button>
        </Grid>
      </Grid>
      <LevelBuilderSnackbar />
    </>
  )
}

export default LevelBuilder
