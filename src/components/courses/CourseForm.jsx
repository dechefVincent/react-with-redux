import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ authors, course, onChange, onSave, saving = false, errors }) => (
  <form onSubmit={onSave}>
    <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
    {errors.onSave && <div className="alert alert-danger">{errors.onSave}</div>}
    <TextInput id="title" label="Title" value={course.title} onChange={onChange} error={errors.title} />
    <SelectInput
      id="authorId"
      label="Author"
      value={course.authorId}
      options={authors.map((author) => ({
        id: author.id,
        text: author.name,
      }))}
      onChange={onChange}
      error={errors.authorId}
    />
    <TextInput id="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
    <button type="submit" className="btn btn-primary" disabled={saving}>
      {saving ? 'Saving...' : 'Save'}
    </button>
  </form>
);

CourseForm.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    authorId: PropTypes.number,
    category: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
};

CourseForm.defaultProps = {
  course: undefined,
  saving: false,
  errors: {},
};

export default CourseForm;
