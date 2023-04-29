import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	BUTTON_FORM_COURSE_TEXT,
	INPUT_PLACEHOLDER_TITLE_FORM,
} from '../../constants';

const CreateCourse = () => {
	return (
		<form>
			<div>
				<Input
					fname='Title'
					labelText='Title'
					placeholder={INPUT_PLACEHOLDER_TITLE_FORM}
				></Input>
				<Button text={BUTTON_FORM_COURSE_TEXT} />
			</div>
		</form>
	);
};
export default CreateCourse;
